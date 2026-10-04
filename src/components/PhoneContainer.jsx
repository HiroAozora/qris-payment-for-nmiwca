import React from 'react';

export default function PhoneContainer({ children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-0 sm:p-4 bg-[#0b172a] selection:bg-[#118eea] selection:text-white">
      {/* Decorative desktop ambient blur circles */}
      <div className="fixed top-12 left-12 w-80 h-80 bg-[#118eea]/15 rounded-full blur-3xl pointer-events-none hidden sm:block" />
      <div className="fixed bottom-12 right-12 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none hidden sm:block" />

      {/* Main Container: 100% Edge-to-Edge on Mobile, Centered Mobile Frame on Desktop */}
      <div className="w-full sm:max-w-[412px] h-[100dvh] sm:h-[844px] bg-white sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden relative">
        {/* Main App Content Viewport without any fake status bar */}
        <div className="flex-1 flex flex-col relative overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
