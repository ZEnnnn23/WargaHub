import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import PortalWarga from './components/PortalWarga';
import DasborAdmin from './components/DasborAdmin';
import WaChatbotSimulator from './components/WaChatbotSimulator';
import WaGatewayLogModal from './components/WaGatewayLogModal';
import SuratDocumentViewer from './components/SuratDocumentViewer';
import { X, CheckCircle2 } from 'lucide-react';

function AppContent() {
  const { currentView, isLansiaMode, toasts, removeToast } = useApp();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Full-Screen Preloader */}
      {isLoading && (
        <Preloader onComplete={() => setIsLoading(false)} />
      )}

      <div className={`min-h-screen bg-app-main flex flex-col transition-colors duration-300 ${isLansiaMode ? 'lansia-mode' : ''} ${!isLoading ? 'animate-fade-up' : 'opacity-0'}`}>
        
        {/* Top Header Navbar */}
        <Navbar />

        {/* Toast Notification Container */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`pointer-events-auto p-4 rounded-2xl shadow-xl border flex items-start justify-between gap-3 transform transition-all duration-300 ${
                toast.type === 'success'
                  ? 'bg-white dark:bg-slate-900 border-emerald-500 text-emerald-900 dark:text-emerald-300'
                  : toast.type === 'info'
                  ? 'bg-white dark:bg-slate-900 border-indigo-500 text-indigo-900 dark:text-indigo-300'
                  : 'bg-white dark:bg-slate-900 border-amber-500 text-amber-900 dark:text-amber-300'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">{toast.title}</h4>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-0.5">{toast.message}</p>
                </div>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Main Content View Switcher */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {currentView === 'warga' ? <PortalWarga /> : <DasborAdmin />}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8 text-center text-xs text-slate-600 dark:text-slate-400 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="font-extrabold text-[#064e3b] dark:text-emerald-400">WargaHub v2.0</span>
            <span>•</span>
            <span>Sistem Informasi & Layanan Administrasi Komunitas Terintegrasi WA & AI</span>
          </div>
          <p>Dirancang untuk Desa, Kelurahan & RT/RW di Seluruh Indonesia • Open Source & Gratis</p>
        </footer>

        {/* Interactive Modals */}
        <WaChatbotSimulator />
        <WaGatewayLogModal />
        <SuratDocumentViewer />
      </div>
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
