import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import WargaHubLogo from './WargaHubLogo';
import {
  Users,
  ShieldCheck,
  MessageSquareText,
  Activity,
  Menu,
  X,
  Volume2,
  Sun,
  Moon
} from 'lucide-react';

export default function Navbar() {
  const {
    theme,
    toggleTheme,
    currentView,
    setCurrentView,
    isLansiaMode,
    setIsLansiaMode,
    communityInfo,
    setIsWaChatbotOpen,
    setIsWaLogModalOpen,
    addToast
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLansiaMode = () => {
    setIsLansiaMode(!isLansiaMode);
    if (!isLansiaMode) {
      addToast('Mode Lansia Aktif: Ukuran teks diperbesar & kontras disesuaikan untuk kenyamanan baca.', 'info', 'Mode Aksesibilitas');
    } else {
      addToast('Mode Standar Aktif.', 'info');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-header shadow-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Community Title */}
          <div className="flex items-center space-x-3">
            <WargaHubLogo className="h-10" showText={true} />
            <div className="hidden sm:block pl-2 border-l border-slate-300 dark:border-slate-800">
              <span className="text-xs font-black text-[#0f172a] dark:text-slate-200">
                RW 08 Kelurahan Sukamaju
              </span>
            </div>
          </div>

          {/* Center Navigation: View Switcher (Portal Warga vs Dasbor Admin) */}
          <div className="hidden md:flex items-center bg-slate-200/60 dark:bg-slate-900/90 p-1.5 rounded-2xl border border-slate-300/80 dark:border-slate-800 shadow-inner">
            <button
              onClick={() => setCurrentView('warga')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs transition-all duration-200 ${
                currentView === 'warga'
                  ? 'bg-[#064e3b] text-white shadow-md'
                  : 'text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/60'
              }`}
            >
              <Users className="w-4 h-4" />
              Portal Warga
            </button>
            <button
              onClick={() => setCurrentView('admin')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-extrabold text-xs transition-all duration-200 ${
                currentView === 'admin'
                  ? 'bg-indigo-700 text-white shadow-md'
                  : 'text-slate-800 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-800/60'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Dasbor Admin / Pengurus
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center space-x-2.5">
            {/* THEME TOGGLE SWITCH (Light Mode vs Dark Mode) */}
            <button
              onClick={toggleTheme}
              title={theme === 'light' ? 'Beralih ke Dark Mode' : 'Beralih ke Light Mode'}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-black bg-white dark:bg-slate-800 text-[#0f172a] dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-xs"
            >
              {theme === 'light' ? (
                <>
                  <Sun className="w-4 h-4 text-amber-500 fill-amber-400" />
                  <span>Mode Terang</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-400 fill-indigo-400" />
                  <span>Mode Gelap</span>
                </>
              )}
            </button>

            {/* Lansia Accessibility Mode Toggle */}
            <button
              onClick={toggleLansiaMode}
              title="Aktifkan Mode Lansia (Teks Besar & Kontras Tinggi)"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black transition-all border ${
                isLansiaMode
                  ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border-amber-400 dark:border-amber-500/60 shadow-xs'
                  : 'bg-white dark:bg-slate-800 text-[#0f172a] dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              <Volume2 className={`w-4 h-4 ${isLansiaMode ? 'text-amber-600 dark:text-amber-400 animate-bounce' : 'text-slate-700'}`} />
              <span>{isLansiaMode ? 'Mode Lansia: ON' : 'Mode Lansia'}</span>
            </button>

            {/* WA Gateway & Queue Logs */}
            <button
              onClick={() => setIsWaLogModalOpen(true)}
              className="relative p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-[#0f172a] dark:text-slate-200 hover:text-emerald-700 dark:hover:text-emerald-400 transition-all shadow-xs"
              title="Lihat Log Gateway Fonnte WA & Antrean Redis"
            >
              <Activity className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-600 rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-600 rounded-full" />
            </button>

            {/* WhatsApp AI Chatbot Launcher Button */}
            <button
              onClick={() => setIsWaChatbotOpen(true)}
              className="flex items-center gap-2 bg-[#16a34a] hover:bg-[#15803d] text-white text-xs font-black px-4 py-2.5 rounded-xl shadow-md transform hover:scale-105 transition-all"
            >
              <MessageSquareText className="w-4 h-4" />
              <span>Chat AI WA</span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Theme Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-200"
              title="Ubah Tema"
            >
              {theme === 'light' ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-indigo-400" />}
            </button>

            <button
              onClick={() => setIsWaChatbotOpen(true)}
              className="p-2.5 rounded-xl bg-[#16a34a] text-white shadow-md"
              title="Chat AI WA"
            >
              <MessageSquareText className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-300 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="p-1 bg-slate-100 dark:bg-slate-950 rounded-xl border border-slate-300 dark:border-slate-800 flex flex-col gap-1.5">
            <button
              onClick={() => {
                setCurrentView('warga');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-bold ${
                currentView === 'warga'
                  ? 'bg-[#064e3b] text-white'
                  : 'text-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4" />
                <span>Portal Warga</span>
              </div>
              {currentView === 'warga' && <span className="w-2 h-2 rounded-full bg-white" />}
            </button>

            <button
              onClick={() => {
                setCurrentView('admin');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-bold ${
                currentView === 'admin'
                  ? 'bg-indigo-700 text-white'
                  : 'text-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Dasbor Admin / Pengurus</span>
              </div>
              {currentView === 'admin' && <span className="w-2 h-2 rounded-full bg-white" />}
            </button>
          </div>

          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              onClick={toggleLansiaMode}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold border ${
                isLansiaMode
                  ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-900 dark:text-amber-300 border-amber-400'
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>{isLansiaMode ? 'Mode Lansia (Aktif)' : 'Mode Lansia'}</span>
            </button>

            <button
              onClick={() => {
                setIsWaLogModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="py-3 px-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 text-xs font-bold flex items-center gap-1.5"
            >
              <Activity className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Log WA</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
