import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronLeft, ChevronRight, ChevronUp, Ticket, Info, CheckCircle2 } from 'lucide-react';
import DanaDashboardBg from '../DanaDashboardBg';
import { sound } from '../../utils/sound';

export default function DanaPaymentSheet({ onBayar }) {
  const handlePayClick = () => {
    sound.playTap();
    onBayar();
  };

  return (
    <div className="flex-1 w-full relative flex flex-col justify-end overflow-hidden select-none">
      {/* Background Dashboard */}
      <DanaDashboardBg />

      {/* Bottom Sheet Modal */}
      <motion.div
        initial={{ y: 20, opacity: 0.95 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full bg-white rounded-t-[28px] shadow-2xl flex flex-col overflow-hidden"
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
                XENDIT | KOTA MEDAN
              </p>
            </div>
          </div>
        </div>

        {/* Price & Options Body */}
        <div className="p-5 space-y-4 bg-white">
          {/* Total Price Row */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-700">Total Harga</span>
            <span className="text-2xl font-black text-[#ea6c00] tracking-tight">
              Rp14.350
            </span>
          </div>

          {/* Promo Row */}
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
              <div className="flex items-center gap-1">
                <span>Promo</span>
                <ChevronUp size={14} />
              </div>
              <span>Tidak Tersedia</span>
            </div>

            {/* DANA CICIL Ticket Banner */}
            <div className="w-full bg-[#fff8eb] border border-[#fbd38d] rounded-xl p-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#f97316] flex items-center justify-center text-white shadow-xs">
                  <Ticket size={18} />
                </div>
                <span className="text-xs font-bold text-slate-800">
                  Pakai DANA CICIL diskon Rp7.175
                </span>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </div>
          </div>

          {/* SMARTPAY Section */}
          <div className="pt-2">
            <div className="flex items-center justify-end gap-1 text-[11px] font-bold text-slate-500 mb-2">
              <span className="tracking-tight italic font-black">SMARTPAY</span>
              <Info size={13} className="text-slate-400" />
            </div>

            {/* Saldo DANA Selection Card */}
            <div className="border border-slate-200/90 rounded-2xl p-3.5 flex items-center justify-between mb-2.5 bg-slate-50/50">
              <div className="flex items-center gap-3">
                {/* DANA Icon Radio */}
                <div className="w-7 h-7 rounded-full bg-[#118eea] flex items-center justify-center text-white shadow-xs">
                  <img src="/logo-dana.png" alt="DANA" className="w-4 h-4 object-contain brightness-0 invert" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Saldo DANA</p>
                  <p className="text-xs font-semibold text-slate-500">Rp30.534</p>
                </div>
              </div>
              <button className="text-[11px] font-bold text-[#118eea] border border-[#118eea] px-3 py-1 rounded-full hover:bg-sky-50 transition-colors">
                GANTI
              </button>
            </div>

            {/* CICIL Option */}
            <div className="border border-slate-100 rounded-2xl p-3 flex items-center justify-between bg-white text-xs">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-100 text-[#118eea] flex items-center justify-center text-[10px] font-black">
                  C
                </span>
                <span className="text-slate-600 font-medium">
                  <span className="font-bold text-[#118eea]">CICIL</span> cuma Rp4.018 (x4)
                </span>
              </div>
              <button className="text-[11px] font-bold text-[#118eea]">
                AKTIVASI
              </button>
            </div>
          </div>

          {/* Big Blue Payment Button */}
          <div className="pt-2">
            <button
              id="bayar-btn-dana"
              onClick={handlePayClick}
              className="w-full py-4 bg-[#118eea] hover:bg-[#0b7ccf] active:scale-[0.98] text-white rounded-2xl font-bold text-base tracking-wide shadow-lg shadow-sky-500/30 transition-all flex items-center justify-center cursor-pointer"
            >
              BAYAR Rp14.350
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
