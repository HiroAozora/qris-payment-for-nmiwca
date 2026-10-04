import React from 'react';

export default function DummyQr({ size = 220, amount = 'Rp 1.000' }) {
  // Pre-calculated authentic pseudo-random QR matrix pattern (25x25)
  // Finder patterns at top-left, top-right, bottom-left
  const matrix = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1],
    [0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0],
    [1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1],
    [0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0],
    [1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1],
    [0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1],
    [1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1],
    [0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0],
    [1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1],
    [1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0],
    [1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1],
    [1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1]
  ];

  const gridSize = 25;
  const cellSize = size / gridSize;

  return (
    <div className="relative flex flex-col items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
      {/* QRIS Header */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-lg tracking-tight text-slate-800">QRIS</span>
          <span className="text-[10px] bg-red-100 text-red-600 font-semibold px-1.5 py-0.5 rounded">GPN</span>
        </div>
        <div className="text-right">
          <span className="text-[11px] font-semibold text-payme-600">payme. QR Pay</span>
        </div>
      </div>

      {/* QR Matrix SVG with Center Logo */}
      <div className="relative p-2 bg-white rounded-xl">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="rounded-lg overflow-hidden"
        >
          {matrix.map((row, r) =>
            row.map((cell, c) => {
              // Hide center cells to create space for fictional logo
              if (r >= 9 && r <= 15 && c >= 9 && c <= 15) {
                return null;
              }
              if (cell === 1) {
                return (
                  <rect
                    key={`${r}-${c}`}
                    x={c * cellSize}
                    y={r * cellSize}
                    width={cellSize - 0.4}
                    height={cellSize - 0.4}
                    rx={cellSize > 7 ? 1.5 : 0.8}
                    fill="#1e293b"
                  />
                );
              }
              return null;
            })
          )}
        </svg>

        {/* Center Logo Badge */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 bg-white rounded-xl shadow-md border-2 border-payme-500 flex flex-col items-center justify-center p-1">
            <div className="w-6 h-6 rounded-full bg-payme-500 flex items-center justify-center text-white text-xs font-black">
              p.
            </div>
            <span className="text-[8px] font-extrabold text-payme-700 tracking-tighter">payme</span>
          </div>
        </div>
      </div>

      {/* Merchant / Target Info */}
      <div className="mt-3 text-center">
        <p className="text-xs font-semibold text-slate-700">Toko Kejutan Rahasia</p>
        <p className="text-[10px] text-slate-400 font-mono">NMID: ID202610049982</p>
        <p className="text-[11px] font-bold text-slate-800 mt-1">Nominal: {amount}</p>
      </div>

      {/* Subtle non-functional notice as requested */}
      <div className="mt-2 text-[10px] text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
        <span>Demo payment — nothing will actually be charged.</span>
      </div>
    </div>
  );
}
