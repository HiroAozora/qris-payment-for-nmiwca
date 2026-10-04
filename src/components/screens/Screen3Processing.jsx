import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CreditCard, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

export default function Screen3Processing({ onComplete }) {
  // Phase: 'processing' -> 'success' -> 'wait'
  const [phase, setPhase] = useState('processing');
  const [statusMessageIndex, setStatusMessageIndex] = useState(0);

  const processingMessages = [
    "Connecting to payment server...",
    "Verifying transaction...",
    "Checking...",
    "Almost there..."
  ];

  useEffect(() => {
    // Cycle through messages
    const msgInterval = setInterval(() => {
      setStatusMessageIndex(prev => {
        if (prev < processingMessages.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 600);

    // After 2.4 seconds, trigger success!
    const successTimeout = setTimeout(() => {
      clearInterval(msgInterval);
      setPhase('success');
      sound.playSuccess();

      // Trigger crisp fintech confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#108ee9', '#facc15', '#10b981', '#ffffff']
      });

      // After 1.3 seconds on success, switch to "wait."
      const waitTimeout = setTimeout(() => {
        setPhase('wait');
        sound.playTwist();

        // After 1 second of "wait.", transition to Screen 4
        const nextTimeout = setTimeout(() => {
          onComplete();
        }, 1100);

        return () => clearTimeout(nextTimeout);
      }, 1400);

      return () => clearTimeout(waitTimeout);
    }, 2400);

    return () => {
      clearInterval(msgInterval);
      clearTimeout(successTimeout);
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 text-center select-none relative overflow-hidden">
      <AnimatePresence mode="wait">
        {phase === 'processing' && (
          <motion.div
            key="processing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center"
          >
            {/* Indonesian e-wallet spinner ring inspired by reference */}
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-payme-100 border-t-payme-500 animate-spin" />
              <div className="absolute inset-2 rounded-full bg-amber-400/90 flex items-center justify-center shadow-inner">
                <CreditCard className="text-white drop-shadow-sm" size={32} />
              </div>
            </div>

            <motion.p
              key={statusMessageIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-semibold text-slate-700 min-h-[24px]"
            >
              {processingMessages[statusMessageIndex]}
            </motion.p>
            <p className="text-xs text-slate-400 mt-1">Mohon jangan menutup halaman ini</p>
          </motion.div>
        )}

        {phase === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="w-full flex flex-col items-center"
          >
            {/* Giant Gold Coin from reference image pembayaran berhasil.jpg */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="w-28 h-28 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 p-2 shadow-xl shadow-amber-400/30 flex items-center justify-center mb-6 relative"
            >
              <div className="w-full h-full rounded-full border-2 border-white/60 flex items-center justify-center bg-amber-400">
                {/* Reference flag wavy logo */}
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4C7 2.5 11 2.5 14 4C17 5.5 21 5.5 22 5V16C21 16.5 17 16.5 14 15C11 13.5 7 13.5 4 15V4Z" />
                </svg>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-1.5 shadow-md"
              >
                <Check size={18} strokeWidth={3} />
              </motion.div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-2xl font-black text-slate-800 tracking-tight"
            >
              Payment Successful ✓
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-2 text-3xl font-extrabold text-payme-600 font-mono"
            >
              Rp 1.000
            </motion.div>

            {/* Receipt Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="w-full mt-6 bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs space-y-2 text-left"
            >
              <div className="flex justify-between">
                <span className="text-slate-400">Status</span>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">SUCCESS</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Transaction ID</span>
                <span className="font-mono font-semibold text-slate-700">NMIW-1001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Metode</span>
                <span className="font-medium text-slate-700">payme. QRIS</span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {phase === 'wait' && (
          <motion.div
            key="wait"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="flex flex-col items-center justify-center"
          >
            <span className="text-4xl">🤨</span>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mt-3">
              wait.
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
