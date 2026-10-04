import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Receipt, FileText, CheckCircle2 } from 'lucide-react';
import { sound } from '../../utils/sound';

export default function Screen6Receipt({ onNext }) {
  useEffect(() => {
    sound.playReceipt();
  }, []);

  const handleContinue = () => {
    sound.playTap();
    onNext();
  };

  return (
    <div className="flex-1 flex flex-col justify-between p-5 bg-slate-100/80">
      {/* Top Header */}
      <div className="text-center pt-1">
        <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1">
          <Receipt size={13} />
          Official Audit Proof
        </span>
      </div>

      {/* Styled Physical Receipt Card with Serrated Zigzag Edge */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", damping: 20 }}
        className="my-auto relative bg-white rounded-t-3xl pt-6 px-6 pb-8 shadow-xl border border-slate-200/60 zigzag-bottom text-slate-800"
      >
        {/* Receipt Header Icon */}
        <div className="flex flex-col items-center border-b border-dashed border-slate-200 pb-4">
          <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-1.5 shadow-xs">
            <FileText size={18} />
          </div>
          <h3 className="font-mono text-xs font-black tracking-widest uppercase text-slate-700">
            PAYMENT RECEIPT
          </h3>
          <p className="text-[10px] text-slate-400 font-mono mt-0.5">
            NO: RC-DAMAGED-9901
          </p>
        </div>

        {/* Receipt Line Items */}
        <div className="py-4 space-y-2.5 font-mono text-xs border-b border-dashed border-slate-200">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold text-slate-800">"emotional damage"</p>
              <p className="text-[10px] text-slate-400">Qty: 1 paket komplit</p>
            </div>
            <p className="font-bold text-slate-800">Rp 0</p>
          </div>

          <div className="flex justify-between text-slate-500 text-[11px] pt-1">
            <span>Tax (PPN 11%)</span>
            <span>Rp 0</span>
          </div>

          <div className="flex justify-between text-slate-500 text-[11px]">
            <span>Service fee (Keringat dingin)</span>
            <span>Rp 0</span>
          </div>
        </div>

        {/* Total */}
        <div className="py-3 flex justify-between items-center font-mono border-b border-dashed border-slate-200">
          <span className="font-extrabold text-sm uppercase text-slate-800">TOTAL</span>
          <span className="font-black text-xl text-payme-600">Rp 0</span>
        </div>

        {/* Status Badge */}
        <div className="mt-4 text-center">
          <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
            Transaction Status
          </span>
          <span className="inline-block bg-rose-50 text-rose-600 border border-rose-200/80 font-mono font-bold text-xs px-3 py-1 rounded-full">
            "unfortunately successful"
          </span>
        </div>

        {/* Fake Barcode SVG */}
        <div className="mt-5 flex flex-col items-center">
          <div className="flex items-center gap-[3px] h-8 opacity-75">
            <div className="w-[2px] h-full bg-slate-800"></div>
            <div className="w-[1px] h-full bg-slate-800"></div>
            <div className="w-[3px] h-full bg-slate-800"></div>
            <div className="w-[1px] h-full bg-slate-800"></div>
            <div className="w-[4px] h-full bg-slate-800"></div>
            <div className="w-[2px] h-full bg-slate-800"></div>
            <div className="w-[1px] h-full bg-slate-800"></div>
            <div className="w-[3px] h-full bg-slate-800"></div>
            <div className="w-[2px] h-full bg-slate-800"></div>
            <div className="w-[1px] h-full bg-slate-800"></div>
            <div className="w-[4px] h-full bg-slate-800"></div>
            <div className="w-[2px] h-full bg-slate-800"></div>
            <div className="w-[1px] h-full bg-slate-800"></div>
            <div className="w-[3px] h-full bg-slate-800"></div>
            <div className="w-[1px] h-full bg-slate-800"></div>
            <div className="w-[2px] h-full bg-slate-800"></div>
          </div>
          <span className="text-[9px] font-mono text-slate-400 mt-1 tracking-widest">
            #KORBAN-TRANSFER-2026
          </span>
        </div>
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="pt-2"
      >
        <button
          id="receipt-continue-btn"
          onClick={handleContinue}
          className="w-full py-4 bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-slate-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer group"
        >
          <span>CONTINUE</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}
