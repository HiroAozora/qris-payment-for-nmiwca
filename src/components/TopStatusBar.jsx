import React, { useState, useEffect } from 'react';
import { Wifi, Signal, Battery, Volume2, VolumeX } from 'lucide-react';

export default function TopStatusBar({ isMuted, onToggleMute, mode = 'light' }) {
  const [time, setTime] = useState('18.16');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hrs = String(now.getHours()).padStart(2, '0');
      const mins = String(now.getMinutes()).padStart(2, '0');
      setTime(`${hrs}.${mins}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const isLightText = mode === 'blue' || mode === 'dark';
  const textColor = isLightText ? 'text-white' : 'text-slate-800';
  const bgColor = mode === 'blue' ? 'bg-[#118eea]' : mode === 'yellow' ? 'bg-[#e5b300]' : 'bg-transparent';

  return (
    <div className={`w-full flex items-center justify-between px-6 pt-3 pb-2 text-xs font-semibold select-none z-30 transition-colors ${textColor} ${bgColor}`}>
      {/* Left: Time and Indonesian status icons from reference */}
      <div className="flex items-center gap-1.5">
        <span className="tracking-tight text-xs">{time}</span>
        <div className="flex items-center gap-1 opacity-70 ml-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-sky-300"></div>
        </div>
      </div>

      {/* Right: Sound toggle + Indonesian VoLTE, KB/s, 4G, WiFi, Battery */}
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleMute}
          title={isMuted ? "Suara Aktif" : "Bisukan"}
          className="p-1 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
        >
          {isMuted ? <VolumeX size={13} className="opacity-70" /> : <Volume2 size={13} className="opacity-90" />}
        </button>

        <span className="text-[9px] font-bold opacity-80">VoLTE</span>
        <span className="text-[9px] font-mono opacity-75">55,6 KB/s</span>
        <Signal size={12} className="opacity-80" />
        <Wifi size={13} className="opacity-80" />
        <div className="flex items-center gap-0.5">
          <span className="text-[10px] font-bold">75%</span>
          <Battery size={14} className="rotate-90 opacity-90" />
        </div>
      </div>
    </div>
  );
}
