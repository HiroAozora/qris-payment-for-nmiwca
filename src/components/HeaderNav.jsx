import React from 'react';
import { ShieldCheck, ChevronLeft, Sparkles } from 'lucide-react';
import { sound } from '../utils/sound';

export default function HeaderNav({
  title = "Konfirmasi Pembayaran",
  stepIndex = 1,
  showBack = false,
  onBack,
  dark = false
}) {
  const getProgressLabel = (step) => {
    switch (step) {
      case 1: return "01 / 09";
      case 2: return "02 / 09";
      case 3: return "03 / 09";
      case 4: return "04 / 09";
      case 5: return "05 / 09";
      case 6: return "?? / 09";
      case 7: return "why / 09";
      case 8: return "08 / ??";
      default: return null;
    }
  };

  const progress = getProgressLabel(stepIndex);

  return (
    <div className={`w-full select-none transition-colors ${dark ? 'text-white' : 'text-slate-800'}`}>
      {/* Top Protection Bar */}
      <div className={`px-5 py-1.5 flex items-center justify-between text-xs border-b ${
        dark ? 'border-white/10 bg-white/5' : 'border-slate-100 bg-payme-50/60'
      }`}>
        <div className="flex items-center gap-1.5 text-payme-600 font-medium">
          <ShieldCheck size={14} className="text-payme-500" />
          <span className="text-[11px] font-bold tracking-tight">payme. PROTECTION</span>
        </div>
        <div className="flex items-center gap-2">
          {progress && (
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-semibold transition-all ${
              stepIndex >= 6
                ? 'bg-amber-100 text-amber-700 animate-pulse'
                : 'bg-payme-100 text-payme-700'
            }`}>
              {progress}
            </span>
          )}
          <div className="bg-payme-500 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
            PAY
          </div>
        </div>
      </div>

      {/* Main Title Bar */}
      <div className={`px-4 py-3 flex items-center justify-between ${
        dark ? 'bg-transparent' : 'bg-white'
      }`}>
        <div className="flex items-center gap-2">
          {showBack ? (
            <button
              onClick={() => {
                sound.playTap();
                if (onBack) onBack();
              }}
              className="p-1 rounded-full hover:bg-slate-100 transition-colors"
            >
              <ChevronLeft size={20} className={dark ? 'text-white' : 'text-slate-700'} />
            </button>
          ) : (
            <div className="w-2" />
          )}
          <h2 className="text-sm font-bold tracking-tight">{title}</h2>
        </div>

        {/* Small subtle brand pill */}
        <div className="text-[11px] font-extrabold tracking-tighter text-payme-600 opacity-80">
          payme.
        </div>
      </div>
    </div>
  );
}
