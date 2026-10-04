import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, AlertCircle, RefreshCw } from 'lucide-react';
import { sound } from '../../utils/sound';

export default function Screen4FirstTwist({ onNext }) {
  const handlePayAgain = () => {
    sound.playTap();
    onNext();
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 bg-slate-50 text-center">
      {/* Cheeky notification banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center justify-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold mx-auto"
      >
        <Sparkles size={13} className="text-amber-500" />
        <span>Achievement Unlocked</span>
      </motion.div>

      {/* Main Absurd Twist Announcement */}
      <div className="my-auto space-y-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="text-3xl font-black text-slate-900 tracking-tight lowercase"
        >
          congratulations.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-base text-slate-600 font-medium max-w-xs mx-auto leading-relaxed"
        >
          You have successfully unlocked another payment.
        </motion.p>

        {/* New Billing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
          className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 max-w-xs mx-auto"
        >
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
            Tagihan Tahap 2
          </span>
          <div className="text-4xl font-extrabold text-slate-900 tracking-tight my-2 flex items-center justify-center gap-1">
            <span className="text-lg text-slate-400 font-semibold">Rp</span>
            <span className="text-payme-600">2.000</span>
          </div>
          <span className="text-[11px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded font-medium inline-block">
            +100% dari tagihan pertama 🔥
          </span>
        </motion.div>
      </div>

      {/* Action Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="flex flex-col items-center gap-2 pt-2"
      >
        <button
          id="pay-again-btn"
          onClick={handlePayAgain}
          className="w-full py-4 bg-payme-500 hover:bg-payme-600 active:scale-[0.98] text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-payme-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer group"
        >
          <RefreshCw size={17} className="group-hover:rotate-180 transition-transform duration-500" />
          <span>PAY AGAIN</span>
        </button>

        <p className="text-xs text-slate-400 font-medium">
          yeah, I know.
        </p>
      </motion.div>
    </div>
  );
}
