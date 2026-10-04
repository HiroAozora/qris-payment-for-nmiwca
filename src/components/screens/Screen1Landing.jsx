import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ShieldAlert, ArrowRight, Sparkles, Store } from 'lucide-react';
import { sound } from '../../utils/sound';

export default function Screen1Landing({ onNext }) {
  const handlePay = () => {
    sound.playTap();
    onNext();
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-5 bg-slate-50">
      {/* Top Banner / Store Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-payme-500 text-white rounded-2xl p-4 shadow-sm relative overflow-hidden"
      >
        <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
            <Store className="text-payme-600" size={24} />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] bg-white/20 font-bold px-1.5 py-0.5 rounded text-white uppercase tracking-wider">
                Verifikasi
              </span>
              <span className="text-[11px] text-white/80">PT. Hiro Studio</span>
            </div>
            <h1 className="text-base font-bold text-white tracking-tight mt-0.5 leading-snug">
              one tiny thing before you continue.
            </h1>
          </div>
        </div>

        <p className="text-xs text-blue-100 mt-3 font-normal leading-relaxed">
          please complete this very important payment.
        </p>
      </motion.div>

      {/* Main Billing Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="my-auto bg-white rounded-3xl p-6 shadow-sm border border-slate-100 text-center"
      >
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest block">
          Total Tagihan
        </span>
        <div className="text-4xl font-extrabold text-slate-800 tracking-tight my-2 flex items-center justify-center gap-1">
          <span className="text-lg text-slate-400 font-semibold">Rp</span>
          <span>1.000</span>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold my-2 border border-emerald-100">
          <Sparkles size={13} className="text-emerald-500" />
          <span>Biaya Layanan: Rp 0 (Diskon 100%)</span>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-payme-50 text-payme-600 flex items-center justify-center">
              <Wallet size={15} />
            </div>
            <div className="text-left">
              <p className="font-semibold text-slate-800">Saldo payme.</p>
              <p className="text-[11px] text-slate-400">Rp 30.534</p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-payme-600 bg-payme-50 px-2.5 py-1 rounded-lg">
            TERCUKUPI
          </span>
        </div>
      </motion.div>

      {/* Bottom Action Area */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-col items-center gap-3 pt-2"
      >
        <button
          id="pay-now-btn"
          onClick={handlePay}
          className="w-full py-4 bg-payme-500 hover:bg-payme-600 active:scale-[0.98] text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-payme-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>PAY NOW</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-[11px] text-slate-400 font-medium">
          totally normal. definitely.
        </p>
      </motion.div>
    </div>
  );
}
