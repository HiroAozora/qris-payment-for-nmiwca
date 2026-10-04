import React from 'react';
import TopStatusBar from './TopStatusBar';

export default function PhoneContainer({
  children,
  isMuted,
  onToggleMute,
  statusMode = 'light'
}) {
  const isDarkFrame = statusMode === 'dark';

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 sm:p-4 md:p-8 bg-[#0b172a] selection:bg-[#118eea] selection:text-white">
      {/* Decorative desktop ambient blur circles */}
      <div className="fixed top-12 left-12 w-80 h-80 bg-[#118eea]/15 rounded-full blur-3xl pointer-events-none hidden sm:block" />
      <div className="fixed bottom-12 right-12 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      {/* Smartphone Device Frame on Desktop / 100% Fullscreen on Mobile */}
      <div className="w-full sm:w-[412px] h-[100dvh] sm:h-[840px] bg-white sm:rounded-[44px] shadow-2xl sm:border-[8px] sm:border-slate-800 flex flex-col overflow-hidden relative sm:ring-1 sm:ring-slate-700/50">
        
        {/* Hardware Notch Pill (Desktop frame only) */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-slate-900 rounded-full z-40 hidden sm:flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700 ml-auto mr-3"></div>
        </div>

        {/* Top Status Bar matching Indonesian Android phone */}
        <TopStatusBar
          isMuted={isMuted}
          onToggleMute={onToggleMute}
          mode={statusMode}
        />

        {/* Main App Content Viewport */}
        <div className="flex-1 flex flex-col relative overflow-y-auto overflow-x-hidden">
          {children}
        </div>

        {/* Bottom Android / iPhone Home Indicator Bar */}
        <div className={`w-full py-1.5 flex items-center justify-center pointer-events-none z-30 transition-colors ${
          statusMode === 'blue'
            ? 'bg-[#118eea]'
            : statusMode === 'dark'
            ? 'bg-black'
            : 'bg-white'
        }`}>
          <div className={`w-32 h-1 rounded-full ${
            statusMode === 'blue' || statusMode === 'dark'
              ? 'bg-white/40'
              : 'bg-slate-300'
          }`} />
        </div>
      </div>
    </div>
  );
}
