import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle2, ShieldCheck, Check, CreditCard } from 'lucide-react';
import DummyQr from '../DummyQr';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

export default function Screen5SecondQR({ onComplete }) {
  const [stage, setStage] = useState('qr'); // 'qr' -> 'processing' -> 'success'
  const [secondsLeft, setSecondsLeft] = useState(180);

  useEffect(() => {
    if (stage !== 'qr') return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? 180 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [stage]);

  const handlePaid = () => {
    sound.playTap();
    setStage('processing');

    setTimeout(() => {
      setStage('success');
      sound.playSuccess();

      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 },
        colors: ['#108ee9', '#facc15', '#ec4899']
      });

      // After 1.4s on success, go directly to receipt screen
      setTimeout(() => {
        onComplete();
      }, 1400);
    }, 1800);
  };

  const formatCountdown = (totalSec) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-5 bg-slate-50">
      <AnimatePresence mode="wait">
        {stage === 'qr' && (
          <motion.div
            key="qr-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col justify-between"
          >
            {/* Header info */}
            <div className="text-center">
              <span className="text-[11px] font-bold text-payme-600 bg-payme-50 px-3 py-1 rounded-full uppercase tracking-wider">
                Babak Kedua: Rp 2.000
              </span>
              <h2 className="text-xl font-extrabold text-slate-800 tracking-tight mt-1.5">
                Scan to Pay (Lagi)
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Jangan tanya kenapa, bayar aja dulu.
              </p>
            </div>

            {/* QR Card */}
            <div className="my-auto flex flex-col items-center">
              <DummyQr size={210} amount="Rp 2.000" />

              <div className="mt-3.5 inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs text-xs">
                <Clock size={14} className="text-amber-500 animate-spin-slow" />
                <span className="text-slate-500 text-[11px]">Sisa waktu:</span>
                <span className="font-mono font-bold text-slate-800 tracking-wider">
                  {formatCountdown(secondsLeft)}
                </span>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                id="ive-paid-btn-2"
                onClick={handlePaid}
                className="w-full py-4 bg-payme-500 hover:bg-payme-600 active:scale-[0.98] text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-payme-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <CheckCircle2 size={18} />
                <span>I've Paid</span>
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-2">
                Server menerima dengan lapang dada
              </p>
            </div>
          </motion.div>
        )}

        {stage === 'processing' && (
          <motion.div
            key="processing-stage"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="my-auto flex flex-col items-center text-center p-6"
          >
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-payme-100 border-t-payme-500 animate-spin" />
              <div className="absolute inset-2 rounded-full bg-amber-400/90 flex items-center justify-center shadow-inner">
                <CreditCard className="text-white" size={32} />
              </div>
            </div>
            <h3 className="text-base font-bold text-slate-800">Menyerap Rp 2.000...</h3>
            <p className="text-xs text-slate-400 mt-1">Memproses kepatuhan Anda...</p>
          </motion.div>
        )}

        {stage === 'success' && (
          <motion.div
            key="success-stage"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="my-auto flex flex-col items-center text-center w-full"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 p-2 shadow-xl flex items-center justify-center mb-5 relative">
              <div className="w-full h-full rounded-full border-2 border-white/60 flex items-center justify-center bg-amber-400">
                <Check size={36} className="text-white" strokeWidth={3} />
              </div>
            </div>

            <h2 className="text-2xl font-black text-slate-800 tracking-tight">
              Payment Successful ✓
            </h2>
            <div className="mt-2 text-3xl font-extrabold text-payme-600 font-mono">
              Rp 2.000
            </div>

            <div className="w-full mt-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-slate-400">Status</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">SUCCESS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Transaction ID</span>
                <span className="font-mono font-semibold text-slate-700">NMIW-2002</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
