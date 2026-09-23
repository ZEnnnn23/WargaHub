import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import {
  MessageSquare,
  X,
  Send,
  Mic,
  Bot,
  User,
  Sparkles,
  Volume2,
  CheckCheck,
  FileText,
  Clock,
  ArrowRight
} from 'lucide-react';

export default function WaChatbotSimulator() {
  const { isWaChatbotOpen, setIsWaChatbotOpen, addLetterRequest, reports, announcements } = useApp();

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Assalamu\'alaikum / Sampurasun Warga RW 08! 👋 Saya Asisten AI WargaHub. Ada yang bisa saya bantu hari ini?\n\nAnda bisa ketik pesan teks atau tekan tombol mikrofon untuk mengirim pesan suara (khususnya untuk lansia).',
      time: '11:00',
      type: 'text'
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (!isWaChatbotOpen) return null;

  const handleSendMessage = (textToSend = null) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const nowTime = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text,
      time: nowTime,
      type: 'text'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Simulate AI Intent Processing & Response after 800ms
    setTimeout(() => {
      let botResponse = '';
      const lower = text.toLowerCase();

      if (lower.includes('surat') || lower.includes('domisili') || lower.includes('skck') || lower.includes('sktm')) {
        // AI creates letter request automatically
        const createdReq = addLetterRequest({
          typeId: lower.includes('skck') ? 'surat-skck' : 'surat-domisili',
          applicantName: 'Warga via WA AI',
          waPhone: '0812-9988-7766',
          rtRw: '02/08',
          purpose: 'Pengajuan Otomatis via Asisten Suara/Chatbot WhatsApp AI',
          channel: 'WhatsApp AI Chatbot'
        });

        botResponse = `Baik Bpk/Ibu! AI WargaHub telah mengenali *Intent Pengajuan Surat*. 📄✨\n\n📌 *Draf Dokumen Berhasil Dibuat:*\n- Jenis: Surat Pengantar\n- ID Tiket: ${createdReq.id}\n- Status: Menunggu Tinjauan Admin RT/RW\n\nDraf telah diteruskan ke dasbor Pengurus. Anda dapat mengecek perkembangan di portal kapan saja!`;
      } else if (lower.includes('pengumuman') || lower.includes('info') || lower.includes('posyandu')) {
        const firstAnn = announcements[0];
        botResponse = `📢 *Pengumuman Resmi Terbaru:*\n\n*${firstAnn.title}*\n${firstAnn.content}\n\nDipublikasikan oleh ${firstAnn.author} pada ${firstAnn.date}.`;
      } else if (lower.includes('lapor') || lower.includes('status')) {
        const lastReport = reports[0];
        botResponse = `🔍 *Status Laporan Terakhir (#${lastReport.id}):*\n- Judul: "${lastReport.title}"\n- Status: *${lastReport.status.toUpperCase()}*\n- Catatan: ${lastReport.adminResponse || 'Dalam penanganan pengurus'}`;
      } else {
        botResponse = `Terima kasih! Pesan Anda telah dipahami oleh AI WargaHub. 😊\n\nAnda dapat menanyakan tentang:\n1. Pengajuan Surat Administrasi (Domisili, SKCK, SKTM)\n2. Pengumuman & Agenda RT/RW terbaru\n3. Status Pelaporan Kejadian Lingkungan`;
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
          type: 'text'
        }
      ]);
    }, 800);
  };

  const handleSimulateVoiceNote = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      handleSendMessage('Saya mau minta Surat Keterangan Domisili untuk buat rekening bank');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full h-[620px] flex flex-col shadow-2xl relative overflow-hidden">
        
        {/* WhatsApp Chat Header */}
        <div className="bg-emerald-800 p-4 flex items-center justify-between text-white shadow-md">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center border-2 border-white/20">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-sm flex items-center gap-1.5">
                <span>Asisten AI WargaHub</span>
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
              </h3>
              <p className="text-[11px] text-emerald-100">WhatsApp Official • Online 24/7</p>
            </div>
          </div>

          <button
            onClick={() => setIsWaChatbotOpen(false)}
            className="text-white hover:text-emerald-200 p-1"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Chat Messages Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0b141a] bg-opacity-95">
          {messages.map((msg) => {
            const isBot = msg.sender === 'bot';
            return (
              <div
                key={msg.id}
                className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs shadow-md space-y-1 ${
                    isBot
                      ? 'bg-[#202c33] text-slate-100 rounded-tl-none border border-slate-700/50'
                      : 'bg-emerald-700 text-white rounded-tr-none'
                  }`}
                >
                  <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                  <div className={`text-[10px] text-right flex items-center justify-end gap-1 ${
                    isBot ? 'text-slate-400' : 'text-emerald-200'
                  }`}>
                    <span>{msg.time}</span>
                    {!isBot && <CheckCheck className="w-3 h-3 text-emerald-200" />}
                  </div>
                </div>
              </div>
            );
          })}
          {isRecording && (
            <div className="flex justify-center my-2">
              <div className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs px-4 py-2 rounded-full flex items-center gap-2 animate-pulse">
                <Mic className="w-4 h-4 text-amber-400" />
                <span>Merekam Pesan Suara (Voice Note)...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="bg-[#111b21] px-3 py-2 border-t border-slate-800 flex gap-2 overflow-x-auto">
          {[
            'Buat Surat Domisili',
            'Pengumuman Posyandu',
            'Cek Status Laporan'
          ].map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="bg-[#202c33] hover:bg-[#2a3942] text-slate-300 text-[11px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap border border-slate-700"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <div className="bg-[#202c33] p-3 flex items-center space-x-2 border-t border-slate-800">
          <button
            onClick={handleSimulateVoiceNote}
            title="Kirim Voice Note (Simulasi Aksesibilitas Lansia)"
            className={`p-2.5 rounded-full transition-all ${
              isRecording
                ? 'bg-rose-600 text-white animate-bounce'
                : 'bg-slate-800 text-emerald-400 hover:bg-slate-700'
            }`}
          >
            <Mic className="w-5 h-5" />
          </button>

          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Ketik pesan atau permohonan surat..."
            className="flex-1 bg-[#2a3942] text-white text-xs rounded-xl px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-emerald-500"
          />

          <button
            onClick={() => handleSendMessage()}
            className="bg-emerald-600 hover:bg-emerald-500 text-white p-2.5 rounded-full shadow-md"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
