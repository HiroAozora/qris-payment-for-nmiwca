import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, QrCode, ShieldCheck } from 'lucide-react';
import DummyQr from '../DummyQr';
import { sound } from '../../utils/sound';

export default function Screen2QR({ onPaid }) {
  // Countdown starting from 04:59 (299 seconds)
  const [secondsLeft, setSecondsLeft] = useState(299);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) return 299; // loop back realistically
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatCountdown = (totalSec) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleClickPaid = () => {
    sound.playTap();
    onPaid();
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-5 bg-slate-50">
      {/* Top Header info */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <span className="text-[11px] font-bold text-payme-600 bg-payme-50 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
          <QrCode size={13} />
          Scan to Pay
        </span>
        <h2 className="text-xl font-extrabold text-slate-800 tracking-tight mt-1.5">
          Scan QRIS payme.
        </h2>
        <div className="flex items-center justify-center gap-1 mt-1">
          <span className="text-xs text-slate-400">Total:</span>
          <span className="text-sm font-bold text-payme-600 font-mono">Rp 1.000</span>
        </div>
      </motion.div>

      {/* QR Code Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, delay: 0.1 }}
        className="my-auto flex flex-col items-center"
      >
        <DummyQr size={210} amount="Rp 1.000" />

        {/* Countdown Timer */}
        <div className="mt-3.5 inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs text-xs">
          <Clock size={14} className="text-amber-500 animate-spin-slow" />
          <span className="text-slate-500 text-[11px]">Selesaikan dalam</span>
          <span className="font-mono font-bold text-slate-800 tracking-wider">
            {formatCountdown(secondsLeft)}
          </span>
        </div>
      </motion.div>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="pt-2"
      >
        <button
          id="ive-paid-btn-1"
          onClick={handleClickPaid}
          className="w-full py-4 bg-payme-500 hover:bg-payme-600 active:scale-[0.98] text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-payme-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <CheckCircle2 size={18} />
          <span>I've Paid</span>
        </button>

        <p className="text-center text-[10px] text-slate-400 mt-2 flex items-center justify-center gap-1">
          <ShieldCheck size={12} className="text-payme-500" />
          Transaksi aman & diawasi sistem demo
        </p>
      </motion.div>
    </div>
  );
}
