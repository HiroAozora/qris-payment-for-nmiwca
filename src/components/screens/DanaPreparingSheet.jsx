import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronLeft, CreditCard } from 'lucide-react';
import DanaDashboardBg from '../DanaDashboardBg';

export default function DanaPreparingSheet({ onReady }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onReady();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onReady]);

  return (
    <div className="flex-1 w-full relative flex flex-col justify-end overflow-hidden select-none">
      {/* Background Dashboard */}
      <DanaDashboardBg />

      {/* Bottom Sheet Modal */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 260 }}
        className="relative z-10 w-full bg-white rounded-t-[28px] shadow-2xl flex flex-col overflow-hidden max-h-[88%]"
      >
        {/* Handle Bar */}
        <div className="w-full flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 bg-slate-300 rounded-full" />
        </div>

        {/* Protection & Pay Strip */}
        <div className="px-5 py-2 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-1.5 text-[#118eea] font-bold text-xs">
            <ShieldCheck size={16} className="text-[#118eea]" />
            <span className="tracking-tight text-[11px]">DANA PROTECTION</span>
          </div>
          <div className="bg-[#118eea] text-white font-extrabold text-[10px] px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            PAY
          </div>
        </div>

        {/* Blue Merchant Header Banner */}
        <div className="bg-[#118eea] text-white px-5 py-3">
          <div className="flex items-center gap-2 mb-2">
            <ChevronLeft size={20} className="text-white/90" />
            <h2 className="text-xs font-semibold tracking-wide text-white">
              Konfirmasi Pembayaran
            </h2>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center p-1.5 shadow-sm shrink-0">
              <span className="font-black text-[10px] text-slate-800 tracking-tighter border-b-2 border-red-500 leading-none">
                QRIS
              </span>
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-tight leading-snug">
                PT. Hiro Studio
              </h3>
              <p className="text-[11px] text-white/80 font-medium">
                XENDIT | JAKARTA SELATAN
              </p>
            </div>
          </div>
        </div>

        {/* Total Price Row */}
        <div className="px-5 py-3.5 flex items-center justify-between border-b border-slate-100 bg-white">
          <span className="text-xs font-semibold text-slate-700">Total Harga</span>
          <span className="text-lg font-black text-[#ea6c00] tracking-tight">
            Rp14.350
          </span>
        </div>

        {/* Center Spinner Area */}
        <div className="py-16 px-6 flex flex-col items-center justify-center text-center bg-[#f9fafb]">
          {/* Animated Spinner with Card Badge */}
          <div className="relative w-24 h-24 mb-5 flex items-center justify-center">
            {/* Spinning Border */}
            <div className="absolute inset-0 rounded-full border-4 border-slate-200 border-t-[#118eea] border-r-[#118eea] animate-spin" />
            
            {/* Yellow Circle with Credit Card */}
            <div className="w-16 h-16 rounded-full bg-[#fbb034] flex items-center justify-center shadow-md">
              <div className="w-10 h-7 bg-[#118eea] rounded-md flex flex-col justify-between p-1 shadow-sm">
                <div className="w-2.5 h-1.5 bg-[#fcd535] rounded-xs" />
                <div className="w-full h-0.5 bg-white/60 rounded-xs" />
              </div>
            </div>
          </div>

          <p className="text-sm font-semibold text-slate-800">
            Menyiapkan detail pembayaran...
          </p>
          <p className="text-[11px] text-slate-400 mt-1">
            Menghubungkan ke dompet DANA
          </p>
        </div>
      </motion.div>
    </div>
  );
}
