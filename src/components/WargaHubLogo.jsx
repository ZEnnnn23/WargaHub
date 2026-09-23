import React from 'react';

export default function WargaHubLogo({ className = 'h-10', showText = true, layout = 'horizontal' }) {
  return (
    <div className={`flex items-center ${layout === 'vertical' ? 'flex-col text-center gap-2' : 'gap-3'}`}>
      
      {/* Official WargaHub Emblem SVG Vector */}
      <svg
        viewBox="0 0 240 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} aspect-square shrink-0`}
      >
        {/* Left Human Figure (Dark Emerald Green #166534 / #134e4a) */}
        <circle cx="70" cy="55" r="22" fill="#166534" />
        <path
          d="M70 95 C 60 115, 60 145, 95 180 C 115 150, 110 120, 85 110 Z"
          fill="#166534"
        />
        <path
          d="M50 100 C 40 120, 45 155, 75 180 C 95 160, 90 135, 70 115 Z"
          fill="#166534"
        />

        {/* Right Human Figure (Bright Fresh Green #22c55e / #16a34a) */}
        <circle cx="170" cy="55" r="22" fill="#22c55e" />
        <path
          d="M170 95 C 180 115, 180 145, 145 180 C 125 150, 130 120, 155 110 Z"
          fill="#22c55e"
        />
        <path
          d="M190 100 C 200 120, 195 155, 165 180 C 145 160, 150 135, 170 115 Z"
          fill="#22c55e"
        />

        {/* House Roof & 4-Pane Window (#15803d) */}
        <path
          d="M120 40 L170 75 L160 85 L120 57 L80 85 L70 75 Z"
          fill="#15803d"
        />
        {/* Window Grid */}
        <rect x="106" y="78" width="11" height="11" rx="2" fill="#15803d" />
        <rect x="123" y="78" width="11" height="11" rx="2" fill="#15803d" />
        <rect x="106" y="94" width="11" height="11" rx="2" fill="#15803d" />
        <rect x="123" y="94" width="11" height="11" rx="2" fill="#15803d" />
      </svg>

      {/* Official Text Branding */}
      {showText && (
        <div className="flex items-center tracking-tight font-black text-2xl leading-none selection:bg-none">
          <span className="text-[#064e3b] dark:text-emerald-400 font-extrabold">Warga</span>
          <span className="text-[#16a34a] dark:text-emerald-300 font-extrabold">Hub</span>
        </div>
      )}

    </div>
  );
}
