import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Delete, HelpCircle, ShieldCheck } from 'lucide-react';
import { sound } from '../../utils/sound';

export default function DanaPinScreen({ onBack, onSuccess }) {
  const [pin, setPin] = useState([]);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleDigit = (digit) => {
    if (isVerifying || pin.length >= 6) return;
    sound.playTap();

    const newPin = [...pin, digit];
    setPin(newPin);

    if (newPin.length === 6) {
      setIsVerifying(true);
      setTimeout(() => {
        onSuccess();
      }, 350);
    }
  };

  const handleDelete = () => {
    if (isVerifying || pin.length === 0) return;
    sound.playTap();
    setPin(prev => prev.slice(0, -1));
  };

  // Physical keyboard listener for desktop/laptop testing
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isVerifying) return;
      if (e.key >= '0' && e.key <= '9') {
        handleDigit(e.key);
      } else if (e.key === 'Backspace') {
        handleDelete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pin, isVerifying]);

  const keypad = [
    { num: '1', sub: '' },
    { num: '2', sub: 'ABC' },
    { num: '3', sub: 'DEF' },
    { num: '4', sub: 'GHI' },
    { num: '5', sub: 'JKL' },
    { num: '6', sub: 'MNO' },
    { num: '7', sub: 'PQRS' },
    { num: '8', sub: 'TUV' },
    { num: '9', sub: 'WXYZ' },
    { num: '', sub: '' },
    { num: '0', sub: '+' },
    { num: 'del', sub: '' }
  ];

  return (
    <div className="flex-1 w-full bg-white flex flex-col justify-between select-none">
      {/* Top Header */}
      <div>
        <div className="px-5 py-3 flex items-center justify-between border-b border-slate-100">
          <button
            onClick={() => {
              sound.playTap();
              if (onBack) onBack();
            }}
            className="p-1 rounded-full hover:bg-slate-100 transition-colors"
          >
            <ChevronLeft size={22} className="text-slate-700" />
          </button>
          <div className="flex items-center gap-1.5">
            <img src="/logo-dana.png" alt="DANA" className="w-5 h-5 object-contain" />
            <span className="font-extrabold text-sm text-[#118eea] tracking-tight">DANA</span>
          </div>
          <button className="text-xs font-semibold text-[#118eea]">
            Bantuan
          </button>
        </div>

        {/* PIN Prompt Header */}
        <div className="text-center pt-4 sm:pt-7 px-6">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Masukkan PIN DANA
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Masukkan 6 digit nomor PIN DANA kamu
          </p>

          {/* 6 Digit Indicator Circles */}
          <div className="flex items-center justify-center gap-4 my-5 sm:my-7">
            {[0, 1, 2, 3, 4, 5].map((idx) => {
              const isFilled = idx < pin.length;
              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{
                    scale: isFilled ? [1, 1.3, 1] : 1,
                    backgroundColor: isFilled ? '#118eea' : '#ffffff',
                    borderColor: isFilled ? '#118eea' : '#cbd5e1'
                  }}
                  transition={{ duration: 0.15 }}
                  className="w-4 h-4 rounded-full border-2 border-slate-300 flex items-center justify-center shadow-xs"
                />
              );
            })}
          </div>

          <div className="inline-flex items-center gap-1 text-[11px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full font-medium">
            <ShieldCheck size={12} />
            <span>Kerahasiaan PIN kamu terjaga</span>
          </div>
        </div>
      </div>

      {/* Virtual Keypad */}
      <div className="w-full bg-[#f8fafc] border-t border-slate-200/80 px-4 pt-3 pb-6">
        <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
          {keypad.map((item, idx) => {
            if (item.num === 'del') {
              return (
                <button
                  key={idx}
                  id="keypad-del"
                  onClick={handleDelete}
                  className="h-14 flex items-center justify-center rounded-2xl active:bg-slate-200 transition-colors cursor-pointer text-slate-700"
                >
                  <Delete size={22} />
                </button>
              );
            }

            if (item.num === '') {
              return <div key={idx} className="h-14" />;
            }

            return (
              <button
                key={idx}
                id={`keypad-${item.num}`}
                onClick={() => handleDigit(item.num)}
                className="h-14 bg-white hover:bg-slate-50 active:bg-slate-200 rounded-2xl shadow-xs border border-slate-200/60 flex flex-col items-center justify-center transition-all cursor-pointer select-none"
              >
                <span className="text-xl font-bold text-slate-800 leading-none">
                  {item.num}
                </span>
                {item.sub && (
                  <span className="text-[9px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5">
                    {item.sub}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
