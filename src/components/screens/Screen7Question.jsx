import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Smile, HelpCircle as QuestionIcon } from 'lucide-react';
import { sound } from '../../utils/sound';

export default function Screen7Question({ onSelect }) {
  const handleAnswer = (choice) => {
    sound.playTap();
    onSelect(choice);
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-6 bg-slate-900 text-white select-none">
      {/* Top subtle indicator */}
      <div className="text-center pt-2">
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
          Reality Check
        </span>
      </div>

      {/* Main Philosophical Question */}
      <div className="my-auto space-y-5 text-center px-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-16 h-16 rounded-3xl bg-white/10 mx-auto flex items-center justify-center text-3xl shadow-inner border border-white/10"
        >
          🤔
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-400 font-medium lowercase"
        >
          wait...
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-3xl font-extrabold tracking-tight text-white leading-tight"
        >
          why are you still paying?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xs text-slate-500 max-w-xs mx-auto"
        >
          Jawaban Anda tidak akan mengubah fakta bahwa Anda sudah tertipu 2 kali.
        </motion.p>
      </div>

      {/* Two Interactive Choices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="space-y-3 pb-2"
      >
        <motion.button
          id="choice-curious"
          whileHover={{ scale: 1.02, x: 2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleAnswer('curious')}
          className="w-full py-4 px-5 bg-white/10 hover:bg-white/15 border border-white/15 active:bg-white/20 rounded-2xl font-semibold text-sm tracking-wide text-white transition-all flex items-center justify-between cursor-pointer group"
        >
          <span>"because i'm curious"</span>
          <span className="text-base group-hover:translate-x-1 transition-transform">👀</span>
        </motion.button>

        <motion.button
          id="choice-idk"
          whileHover={{ scale: 1.02, x: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => handleAnswer('idk')}
          className="w-full py-4 px-5 bg-white/5 hover:bg-white/10 border border-white/10 active:bg-white/15 rounded-2xl font-semibold text-sm tracking-wide text-slate-300 transition-all flex items-center justify-between cursor-pointer group"
        >
          <span>"i don't know"</span>
          <span className="text-base group-hover:rotate-12 transition-transform">🤷‍♂️</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
