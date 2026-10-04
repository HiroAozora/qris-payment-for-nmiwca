import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Heart, Sparkles, Upload, Maximize2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../../utils/sound';

export default function VideoSurpriseModal({ onRestart }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/video.mp4');
  const [hasCustomVideo, setHasCustomVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    sound.playCelebration();

    // Warm elegant confetti
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.4 },
      colors: ['#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6', '#fbbf24']
    });
  }, []);

  const togglePlay = () => {
    sound.playTap();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoSrc(url);
      setHasCustomVideo(true);
      setVideoError(false);
      setIsPlaying(true);
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }, 200);
    }
  };

  return (
    <div className="flex-1 w-full h-full bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white flex flex-col justify-between p-4 sm:p-5 select-none relative overflow-hidden">
      {/* Background ambient aura */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Tag */}
      <div className="w-full flex items-center justify-between pt-1 z-10">
        <span className="text-[11px] font-semibold text-rose-300 bg-rose-500/20 border border-rose-500/30 px-3 py-1 rounded-full inline-flex items-center gap-1.5 shadow-xs">
          <Heart size={12} className="text-rose-400 fill-rose-400" />
          Special Surprise
        </span>
        <span className="text-[10px] text-slate-400 font-mono">
          Just for you
        </span>
      </div>

      {/* Video Container Area */}
      <div className="my-auto py-1 sm:py-2 z-10 flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-sm bg-slate-900/90 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
        >
          {/* Video Player */}
          <div className="relative aspect-[9/16] max-h-[50vh] sm:max-h-[460px] w-full bg-black flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              src={videoSrc}
              playsInline
              loop
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setVideoError(true)}
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Overlay if video file is not yet provided or had error */}
            {videoError && !hasCustomVideo && (
              <div className="absolute inset-0 bg-slate-950/90 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-3 shadow-inner">
                  <Heart size={32} className="fill-rose-400" />
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Video Surprise Kamu
                </h4>
                <p className="text-xs text-slate-400 max-w-xs leading-relaxed mb-4">
                  Letakkan file <code className="text-rose-300 font-mono bg-white/10 px-1 py-0.5 rounded">video.mp4</code> di folder <code className="text-slate-300 font-mono">public/</code> atau pilih video langsung di bawah:
                </p>

                {/* Upload / Test Video Button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2.5 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-rose-500/30 cursor-pointer"
                >
                  <Upload size={14} />
                  <span>Pilih File Video Sekarang</span>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            )}

            {/* Play/Pause Center Indicator */}
            {!videoError && !isPlaying && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={togglePlay}
                className="absolute inset-0 m-auto w-16 h-16 bg-white/25 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer"
              >
                <Play size={28} className="translate-x-0.5 fill-white" />
              </motion.button>
            )}

            {/* Bottom Controls Bar on Video */}
            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-between">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="translate-x-0.5" />}
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleVideoMute}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors"
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <button
                  onClick={() => {
                    if (videoRef.current?.requestFullscreen) {
                      videoRef.current.requestFullscreen();
                    }
                  }}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors"
                >
                  <Maximize2 size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Sweet Caption Below Video */}
          <div className="p-4 bg-slate-900 border-t border-white/10 text-center">
            <h3 className="text-base font-extrabold text-white tracking-tight">
              imup cekali cayang, cubit ah🤏
            </h3>
          </div>
        </motion.div>

        {/* Change Video option if custom video loaded */}
        {hasCustomVideo && (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="mt-2 text-[11px] text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Upload size={12} />
            <span>Ganti file video</span>
          </button>
        )}
      </div>

      {/* Restart Button */}
      <div className="w-full text-center pt-2 z-10">
        <button
          onClick={() => {
            sound.playTap();
            onRestart();
          }}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors py-2 px-4 rounded-full hover:bg-white/10 cursor-pointer font-medium"
        >
          <RotateCcw size={14} />
          <span>Mulai dari Splash Screen lagi</span>
        </button>
      </div>
    </div>
  );
}
