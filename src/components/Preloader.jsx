import React, { useEffect, useState } from 'react';
import WargaHubLogo from './WargaHubLogo';

export default function Preloader({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 1.6 seconds loading display time
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for fade-out animation to finish (400ms) before calling onComplete
      const endTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 400);
      return () => clearTimeout(endTimer);
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f8fafc] dark:bg-[#061a14] transition-opacity duration-500 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center p-6 space-y-6 max-w-sm text-center animate-fade-in">
        
        {/* Animated WargaHub Logo */}
        <div className="transform transition-transform duration-700 hover:scale-105 animate-pulse-subtle">
          <WargaHubLogo className="h-24 sm:h-28" layout="vertical" showText={true} />
        </div>

        {/* Tagline */}
        <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wide">
          "Menghubungkan Warga, Membangun Bersama."
        </p>

        {/* Minimal Green Progress Loading Bar */}
        <div className="w-48 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
          <div className="h-full bg-emerald-600 dark:bg-emerald-400 rounded-full animate-progress-bar" />
        </div>

      </div>
    </div>
  );
}
