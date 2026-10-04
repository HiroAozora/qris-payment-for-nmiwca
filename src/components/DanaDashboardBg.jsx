import React from 'react';
import { Plus, ArrowDownLeft, Send, Mail, Eye, EyeOff } from 'lucide-react';

export default function DanaDashboardBg() {
  return (
    <div className="absolute inset-0 bg-[#e5b300] overflow-hidden select-none pointer-events-none">
      {/* Top DANA Balance Header */}
      <div className="px-5 pt-3 pb-4 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <span className="text-sm font-bold tracking-tight text-white/95">Rp 30.534</span>
            <Eye size={13} className="text-white/80" />
          </div>

          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/30 text-[11px] font-bold">
            <span>CICIL</span>
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
          </div>
        </div>

        {/* 4 Action Buttons: Top Up, Minta, Kirim, Pesan */}
        <div className="grid grid-cols-4 gap-2 text-center text-white">
          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shadow-xs">
              <Plus size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-semibold">Top Up</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shadow-xs">
              <ArrowDownLeft size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[11px] font-semibold">Minta</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shadow-xs">
              <Send size={18} className="text-white" />
            </div>
            <span className="text-[11px] font-semibold">Kirim</span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center shadow-xs">
              <Mail size={18} className="text-white" />
            </div>
            <span className="text-[11px] font-semibold">Pesan</span>
          </div>
        </div>
      </div>

      {/* Bulbasaur Promo Banner Representation */}
      <div className="mx-4 mt-1 bg-amber-400/90 rounded-2xl p-3 border border-yellow-200/50 shadow-sm flex items-center justify-between">
        <div>
          <p className="text-[11px] font-extrabold text-blue-900 leading-tight">
            Koleksi GRATIS Skin Bulbasaur
          </p>
          <span className="inline-block mt-1 bg-sky-500 text-white font-extrabold text-[9px] px-2.5 py-0.5 rounded-full shadow-xs">
            KLAIM SEKARANG
          </span>
        </div>
        <div className="text-3xl">🐸</div>
      </div>

      {/* Dark overlay backdrop for bottom sheet modal */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[1px]" />
    </div>
  );
}
