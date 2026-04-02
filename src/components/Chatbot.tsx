import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Bot, Loader2, Image as ImageIcon, Mic, StopCircle } from "lucide-react";
import { GoogleGenAI, LiveServerMessage, Modality } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

type Message = {
  id: string;
  role: "user" | "model";
  text: string;
  image?: string;
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "1", role: "model", text: "Hi! I'm the OpenClaw AI assistant. I can answer questions about our agency, analyze images you upload, or we can have a live voice conversation. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<{ base64: string; mimeType: string; url: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Voice State
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  // Audio Refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sessionRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1];
      setImageFile({
        base64,
        mimeType: file.type,
        url: result
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && !imageFile) || isLoading) return;

    const userText = input.trim();
    const userImage = imageFile?.url;
    const currentImageFile = imageFile;
    
    const newUserMessage: Message = { 
      id: Date.now().toString(), 
      role: "user", 
      text: userText,
      image: userImage
    };
    
    setMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setImageFile(null);
    setIsLoading(true);

    try {
      const historyParts: any[] = [];
      
      // We need to build the history for generateContent
      // Since generateContent takes an array of contents
      const contents = messages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));

      // Add current message
      const currentParts: any[] = [];
      if (userText) currentParts.push({ text: userText });
      if (currentImageFile) {
        currentParts.push({
          inlineData: {
            data: currentImageFile.base64,
            mimeType: currentImageFile.mimeType
          }
        });
      }
      contents.push({ role: "user", parts: currentParts });

      const response = await ai.models.generateContent({
        model: currentImageFile ? "gemini-3.1-pro-preview" : "gemini-3.1-flash-preview",
        contents: contents,
        config: {
          systemInstruction: "You are an AI assistant for OpenClaw Setup Agency. You help users understand our services (AI automation, chatbots, lead gen). Keep answers concise, professional, and helpful. If they upload an image, analyze it in the context of business automation if possible."
        }
      });

      const modelMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        text: response.text || "I couldn't process that.",
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "model", text: "Sorry, I encountered an error processing your request." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const startVoice = async () => {
    setIsVoiceMode(true);
    setIsRecording(true);
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioContextClass({ sampleRate: 16000 });
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const source = audioCtxRef.current.createMediaStreamSource(stream);
      const processor = audioCtxRef.current.createScriptProcessor(4096, 1, 1);

      processor.onaudioprocess = (e) => {
        if (!sessionRef.current) return;
        const inputData = e.inputBuffer.getChannelData(0);
        const pcm16 = new Int16Array(inputData.length);
        for (let i = 0; i < inputData.length; i++) {
          pcm16[i] = Math.max(-1, Math.min(1, inputData[i])) * 32767;
        }
        const buffer = new Uint8Array(pcm16.buffer);
        let binary = '';
        for (let i = 0; i < buffer.byteLength; i++) {
          binary += String.fromCharCode(buffer[i]);
        }
        const base64 = btoa(binary);
        sessionRef.current.then((session: any) => {
          session.sendRealtimeInput({ audio: { data: base64, mimeType: 'audio/pcm;rate=16000' } });
        });
      };

      source.connect(processor);
      processor.connect(audioCtxRef.current.destination);
      processorRef.current = processor;

      sessionRef.current = ai.live.connect({
        model: "gemini-3.1-flash-live-preview",
        callbacks: {
          onopen: () => console.log("Live API connected"),
          onmessage: (message: LiveServerMessage) => {
            const base64Audio = message.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
            if (base64Audio && audioCtxRef.current) {
              const binary = atob(base64Audio);
              const bytes = new Uint8Array(binary.length);
              for(let i=0; i<binary.length; i++) bytes[i] = binary.charCodeAt(i);
              const pcm16 = new Int16Array(bytes.buffer);
              const float32 = new Float32Array(pcm16.length);
              for(let i=0; i<pcm16.length; i++) float32[i] = pcm16[i] / 32768;

              const audioBuffer = audioCtxRef.current.createBuffer(1, float32.length, 24000);
              audioBuffer.getChannelData(0).set(float32);
              const playSource = audioCtxRef.current.createBufferSource();
              playSource.buffer = audioBuffer;
              playSource.connect(audioCtxRef.current.destination);
              playSource.start();
            }
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: "You are a helpful voice assistant for OpenClaw Setup Agency. Keep responses short and conversational.",
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } }
          }
        }
      });

    } catch (err) {
      console.error("Voice error:", err);
      stopVoice();
    }
  };

  const stopVoice = () => {
    setIsRecording(false);
    setIsVoiceMode(false);
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    sessionRef.current = null;
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[380px] h-[600px] max-h-[80vh] bg-dark-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-dark-900 border-b border-white/10 p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-primary-600 p-2 rounded-lg text-white">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white">OpenClaw AI</h3>
                  <p className="text-xs text-primary-400">Online</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Voice Mode Overlay */}
            {isVoiceMode ? (
              <div className="flex-1 flex flex-col items-center justify-center bg-dark-950 p-6 text-center">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary-600/30 rounded-full animate-ping"></div>
                  <div className="relative bg-primary-600 text-white p-6 rounded-full shadow-[0_0_30px_rgba(230,0,0,0.5)]">
                    <Mic size={48} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Listening...</h3>
                <p className="text-slate-400 mb-8">Speak clearly into your microphone.</p>
                <button 
                  onClick={stopVoice}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
                >
                  <StopCircle size={20} /> End Conversation
                </button>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id} 
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div 
                        className={`max-w-[80%] rounded-2xl p-3 ${
                          msg.role === "user" 
                            ? "bg-primary-600 text-white rounded-br-sm" 
                            : "bg-white/10 text-slate-200 rounded-bl-sm border border-white/5"
                        }`}
                      >
                        {msg.image && (
                          <img src={msg.image} alt="Uploaded" className="w-full rounded-lg mb-2 max-h-40 object-cover" />
                        )}
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/10 text-slate-200 rounded-2xl rounded-bl-sm p-3 border border-white/5">
                        <Loader2 size={16} className="animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Image Preview */}
                {imageFile && (
                  <div className="px-4 py-2 bg-dark-900 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <ImageIcon size={16} className="text-primary-400" />
                      <span className="truncate max-w-[200px]">Image attached</span>
                    </div>
                    <button onClick={() => setImageFile(null)} className="text-slate-400 hover:text-white">
                      <X size={16} />
                    </button>
                  </div>
                )}

                {/* Input */}
                <div className="p-4 bg-dark-900 border-t border-white/10">
                  <form onSubmit={handleSubmit} className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="p-2 text-slate-400 hover:text-primary-400 transition-colors"
                      title="Upload Image"
                    >
                      <ImageIcon size={20} />
                    </button>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                    />
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask anything..."
                      className="flex-1 bg-dark-950 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-primary-500 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={startVoice}
                      className="p-2 text-slate-400 hover:text-primary-400 transition-colors"
                      title="Start Voice Conversation"
                    >
                      <Mic size={20} />
                    </button>
                    <button
                      type="submit"
                      disabled={(!input.trim() && !imageFile) || isLoading}
                      className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-[0_0_20px_rgba(230,0,0,0.3)] hover:shadow-[0_0_30px_rgba(230,0,0,0.5)] hover:scale-110 transition-all z-50"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </>
  );
}
