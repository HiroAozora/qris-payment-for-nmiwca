import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles, RotateCcw, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

export default function Screen9FinalReveal({ onRestart }) {
  const [unwrapped, setUnwrapped] = useState(false);

  useEffect(() => {
    sound.playCelebration();

    // Warm elegant confetti burst
    const end = Date.now() + 1500;
    const colors = ['#f59e0b', '#fbbf24', '#ec4899', '#8b5cf6', '#60a5fa'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  const handleGiftClick = () => {
    sound.playTap();
    setUnwrapped(true);
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 bg-gradient-to-b from-amber-50/70 via-orange-50/40 to-rose-50/60 text-slate-800 select-none relative overflow-hidden">
      {/* Soft warm ambient background orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-48 h-48 bg-rose-200/25 rounded-full blur-2xl pointer-events-none" />

      {/* Header tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center pt-2 relative z-10"
      >
        <span className="text-[11px] font-semibold text-amber-700 bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-200/60 inline-flex items-center gap-1.5 shadow-xs">
          <Sparkles size={12} className="text-amber-500" />
          Plot Twist Selesai
        </span>
      </motion.div>

      {/* Center content */}
      <div className="my-auto space-y-4 text-center relative z-10 py-2">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-extrabold text-slate-900 tracking-tight lowercase"
        >
          okay, enough.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="space-y-1.5"
        >
          <p className="text-base text-slate-700 font-medium">
            you don't actually owe me anything.
          </p>
          <p className="text-sm text-slate-500">
            this whole thing was just a setup.
          </p>
          <p className="text-xs text-amber-800/80 font-medium bg-amber-100/50 px-3 py-1.5 rounded-xl max-w-xs mx-auto border border-amber-200/40">
            your actual reward isn't on this website.
          </p>
        </motion.div>

        {/* Small Animated Gift Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 18,
            delay: 0.4
          }}
          className="py-4"
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGiftClick}
            className="w-28 h-28 mx-auto bg-gradient-to-tr from-amber-400 via-rose-400 to-pink-500 rounded-3xl p-1 shadow-xl shadow-rose-500/20 cursor-pointer flex items-center justify-center relative group"
          >
            <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-[22px] flex flex-col items-center justify-center transition-all group-hover:bg-white/95">
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut"
                }}
              >
                <Gift className="text-rose-500 drop-shadow-sm" size={44} />
              </motion.div>
              <span className="text-[10px] font-bold text-slate-500 mt-1 uppercase tracking-wider">
                {unwrapped ? '✨ Buka!' : 'Tap Me'}
              </span>
            </div>

            {/* Sparkle badge */}
            <div className="absolute -top-1.5 -right-1.5 bg-amber-400 text-white rounded-full p-1 shadow">
              <Sparkles size={12} />
            </div>
          </motion.div>
        </motion.div>

        {/* Closing text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="space-y-1.5 pt-1"
        >
          <p className="text-base font-bold text-slate-800">
            check the thing I gave you.
          </p>
          <p className="text-xs text-slate-500 italic">
            that's your real payment.
          </p>
        </motion.div>
      </div>

      {/* Restart / Replay option */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="pt-2 text-center relative z-10"
      >
        <button
          id="replay-btn"
          onClick={() => {
            sound.playTap();
            onRestart();
          }}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors py-2 px-3 rounded-full hover:bg-black/5 cursor-pointer font-medium"
        >
          <RotateCcw size={13} />
          <span>Mulai dari awal lagi</span>
        </button>
      </motion.div>
    </div>
  );
}
