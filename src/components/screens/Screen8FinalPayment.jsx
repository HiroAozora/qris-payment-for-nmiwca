import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, CreditCard, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

export default function Screen8FinalPayment({ onFinish }) {
  const [phase, setPhase] = useState('ready'); // 'ready' -> 'processing' -> 'success'

  const handlePayZero = () => {
    sound.playTap();
    setPhase('processing');

    setTimeout(() => {
      setPhase('success');
      sound.playSuccess();

      confetti({
        particleCount: 30,
        spread: 45,
        origin: { y: 0.6 },
        colors: ['#108ee9', '#10b981', '#ffffff']
      });

      // Pause for 1.3s then switch atmosphere to final reveal
      setTimeout(() => {
        onFinish();
      }, 1300);
    }, 1600);
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 bg-slate-50 text-center">
      <AnimatePresence mode="wait">
        {phase === 'ready' && (
          <motion.div
            key="ready-phase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col justify-between"
          >
            {/* Header info */}
            <div>
              <span className="text-[11px] font-bold text-payme-600 bg-payme-50 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
                <Sparkles size={13} />
                Final Boss Payment
              </span>
              <h1 className="text-2xl font-black text-slate-800 tracking-tight mt-2 lowercase">
                okay. last one.
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Janji ini yang terakhir banget, suer ga bohong.
              </p>
            </div>

            {/* Zero Dollar Billing Card */}
            <div className="my-auto bg-white rounded-3xl p-7 shadow-sm border border-slate-200/80 max-w-xs mx-auto w-full">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                Total Tagihan Terakhir
              </span>
              <div className="text-5xl font-black text-slate-900 tracking-tight my-3 flex items-center justify-center gap-1 font-mono">
                <span className="text-2xl text-slate-400 font-sans font-semibold">Rp</span>
                <span className="text-emerald-500">0</span>
              </div>
              <div className="text-[11px] text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full font-medium inline-block">
                🎉 Bebas Biaya Admin & Hati Tenang
              </div>
              <p className="text-[10px] text-slate-400 mt-3">
                Tanpa QR code. Tinggal klik dan selesai.
              </p>
            </div>

            {/* Pay 0 Button */}
            <div className="pt-2">
              <button
                id="pay-zero-btn"
                onClick={handlePayZero}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>PAY Rp 0</span>
              </button>
              <p className="text-center text-[10px] text-slate-400 mt-2">
                Tekan untuk mengakhiri siklus ini
              </p>
            </div>
          </motion.div>
        )}

        {phase === 'processing' && (
          <motion.div
            key="processing-phase"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="my-auto flex flex-col items-center p-6"
          >
            <div className="relative w-20 h-20 mb-5">
              <div className="absolute inset-0 rounded-full border-4 border-slate-100 border-t-emerald-500 animate-spin" />
              <div className="absolute inset-2 rounded-full bg-emerald-50 flex items-center justify-center">
                <CreditCard className="text-emerald-600" size={28} />
              </div>
            </div>
            <h3 className="text-base font-bold text-slate-800">Processing...</h3>
            <p className="text-xs text-slate-400 mt-1">Menutup buku kas semesta...</p>
          </motion.div>
        )}

        {phase === 'success' && (
          <motion.div
            key="success-phase"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="my-auto flex flex-col items-center w-full"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-300 p-2 shadow-xl flex items-center justify-center mb-5">
              <div className="w-full h-full rounded-full border-2 border-white/60 flex items-center justify-center bg-emerald-400">
                <Check size={40} className="text-white" strokeWidth={3} />
              </div>
            </div>

            <h2 className="text-2xl font-black text-slate-800 tracking-tight">
              Payment Successful ✓
            </h2>
            <div className="mt-2 text-3xl font-extrabold text-emerald-600 font-mono">
              Rp 0
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
