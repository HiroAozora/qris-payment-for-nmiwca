import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight, Sparkles, Video, PlayCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

export default function DanaSuccessScreen({ onOpenDetail }) {
  useEffect(() => {
    sound.playSuccess();

    // Trigger authentic celebration confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.55 },
      colors: ['#ffffff', '#facc15', '#60a5fa', '#38bdf8']
    });
  }, []);

  const handleDetailClick = () => {
    sound.playTap();
    onOpenDetail();
  };

  return (
    <div className="flex-1 w-full bg-[#118eea] text-white flex flex-col justify-between p-6 select-none relative overflow-hidden">
      {/* Subtle radial glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top DANA Mini Balance Strip matching pembayaran berhasil.jpg */}
      <div className="w-full flex items-center justify-between z-10 pt-1">
        <div className="flex items-center gap-1.5 opacity-90">
          <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
          <span className="text-xs font-semibold">Rp 16.184</span>
          <Eye size={12} className="opacity-80" />
        </div>

        <div className="flex items-center gap-1 bg-white/15 px-2 py-0.5 rounded-full text-[10px] font-bold border border-white/20">
          <span>CICIL</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
        </div>
      </div>

      {/* Center Giant Golden Coin & Success Message */}
      <div className="my-auto flex flex-col items-center text-center z-10 py-4">
        {/* Glowing Golden Coin with DANA Emblem */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 280, damping: 18 }}
          className="relative w-44 h-44 rounded-full bg-[#ffb703] p-3 shadow-2xl shadow-yellow-500/40 flex items-center justify-center mb-6"
        >
          {/* Inner Coin Border */}
          <div className="w-full h-full rounded-full border-4 border-[#ffcc29] bg-gradient-to-tr from-[#f59e0b] to-[#fbbf24] flex items-center justify-center relative shadow-inner">
            {/* DANA Emblem representation inside coin */}
            <svg
              className="w-20 h-20 text-white/95 drop-shadow-md"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M4 5C7.5 3 11.5 3 14.5 5C17.5 7 21.5 7 23 6.2V17C21.5 17.8 17.5 17.8 14.5 15.8C11.5 13.8 7.5 13.8 4 15.8V5Z" />
            </svg>

            {/* Sparkle particle */}
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.2, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-1 -right-1 text-white"
            >
              <Sparkles size={20} />
            </motion.div>
          </div>
        </motion.div>

        {/* Text: Pembayaran Berhasil! */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-black tracking-tight text-white drop-shadow-sm"
        >
          Pembayaran Berhasil!
        </motion.h1>

        {/* Text: Rp14.350 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-black tracking-tight text-white mt-2 drop-shadow-sm font-sans"
        >
          Rp14.350
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs text-blue-100/90 mt-2 font-medium"
        >
          ID Transaksi: <span className="font-mono">NMIW-20261004</span>
        </motion.p>
      </div>

      {/* Bottom Action Area: Tombol DETAIL as requested */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="w-full z-10 pt-2 space-y-2.5"
      >
        <button
          id="detail-pembayaran-btn"
          onClick={handleDetailClick}
          className="w-full py-4 bg-white hover:bg-slate-50 active:scale-[0.98] text-[#118eea] rounded-2xl font-extrabold text-sm tracking-wide shadow-xl shadow-blue-900/30 transition-all flex items-center justify-center gap-2 cursor-pointer group"
        >
          <PlayCircle size={20} className="text-[#118eea] group-hover:scale-110 transition-transform" />
          <span>LIHAT DETAIL PEMBAYARAN</span>
          <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-[11px] text-center text-white/75 font-medium">
          Ketuk untuk melihat rincian bukti transaksi
        </p>
      </motion.div>
    </div>
  );
}
