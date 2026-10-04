import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PhoneContainer from './components/PhoneContainer';
import DanaSplashScreen from './components/screens/DanaSplashScreen';
import DanaPreparingSheet from './components/screens/DanaPreparingSheet';
import DanaPaymentSheet from './components/screens/DanaPaymentSheet';
import DanaPinScreen from './components/screens/DanaPinScreen';
import DanaSuccessScreen from './components/screens/DanaSuccessScreen';
import VideoSurpriseModal from './components/screens/VideoSurpriseModal';

export default function App() {
  // Screen stages: 'splash' -> 'preparing' -> 'payment' -> 'pin' -> 'success' -> 'video'
  const [screen, setScreen] = useState('splash');

  return (
    <PhoneContainer>
      <AnimatePresence mode="wait">
        {screen === 'splash' && (
          <motion.div
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="flex-1 flex flex-col w-full h-full overflow-hidden"
          >
            <DanaSplashScreen onFinished={() => setScreen('preparing')} />
          </motion.div>
        )}

        {screen === 'preparing' && (
          <motion.div
            key="preparing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col w-full h-full overflow-hidden"
          >
            <DanaPreparingSheet onReady={() => setScreen('payment')} />
          </motion.div>
        )}

        {screen === 'payment' && (
          <motion.div
            key="payment"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col w-full h-full overflow-hidden"
          >
            <DanaPaymentSheet onBayar={() => setScreen('pin')} />
          </motion.div>
        )}

        {screen === 'pin' && (
          <motion.div
            key="pin"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="flex-1 flex flex-col w-full h-full overflow-hidden"
          >
            <DanaPinScreen
              onBack={() => setScreen('payment')}
              onSuccess={() => setScreen('success')}
            />
          </motion.div>
        )}

        {screen === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="flex-1 flex flex-col w-full h-full overflow-hidden"
          >
            <DanaSuccessScreen onOpenDetail={() => setScreen('video')} />
          </motion.div>
        )}

        {screen === 'video' && (
          <motion.div
            key="video"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35 }}
            className="flex-1 flex flex-col w-full h-full overflow-hidden"
          >
            <VideoSurpriseModal onRestart={() => setScreen('splash')} />
          </motion.div>
        )}
      </AnimatePresence>
    </PhoneContainer>
  );
}
