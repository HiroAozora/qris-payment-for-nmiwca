import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function DanaSplashScreen({ onFinished }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinished();
    }, 2400);
    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <div
      onClick={onFinished}
      className="flex-1 w-full flex flex-col justify-between items-center bg-[#118eea] text-white p-6 relative overflow-hidden select-none cursor-pointer"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top spacing */}
      <div className="w-full pt-4"></div>

      {/* Center Brand & Character Group */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center z-10 -mt-6"
      >
        {/* DANA Circular Logo from user image */}
        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-xl p-4 mb-6">
          <img
            src="/logo-dana.png"
            alt="DANA"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Pokemon Collaboration Art representation */}
        <div className="relative flex flex-col items-center">
          {/* Animated cute cartoon characters illustration */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
            className="flex items-end justify-center -space-x-3 mb-2"
          >
            {/* Squirtle */}
            <div className="w-14 h-14 bg-sky-200 rounded-full border-2 border-white flex items-center justify-center text-xl shadow-md">
              🐢
            </div>
            {/* Snorlax (Big in center back) */}
            <div className="w-20 h-20 bg-teal-800 rounded-full border-2 border-white flex items-center justify-center text-3xl shadow-lg -mb-1 z-10">
              💤
            </div>
            {/* Pikachu */}
            <div className="w-16 h-16 bg-yellow-300 rounded-full border-2 border-white flex items-center justify-center text-2xl shadow-md z-20">
              ⚡
            </div>
            {/* Charmander */}
            <div className="w-14 h-14 bg-orange-400 rounded-full border-2 border-white flex items-center justify-center text-xl shadow-md">
              🔥
            </div>
          </motion.div>

          {/* Pokemon Pill Badge */}
          <div className="bg-yellow-400 text-blue-900 font-extrabold text-xs px-3 py-0.5 rounded-full border-2 border-blue-900 tracking-wider shadow-sm mt-1">
            Pokémon™
          </div>
        </div>
      </motion.div>

      {/* Bottom Legal / Regulatory text as in reference */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full text-center pb-4 z-10"
      >
        <p className="text-[11px] text-white/90 leading-relaxed font-normal max-w-xs mx-auto">
          DANA Indonesia terdaftar serta diawasi<br />
          oleh <span className="font-bold">Bank Indonesia</span> dan <span className="font-bold">Komdigi</span>
        </p>
      </motion.div>
    </div>
  );
}
