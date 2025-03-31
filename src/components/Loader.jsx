import React from 'react';
import { motion } from 'framer-motion';

const SpicyLoader = () => {
  // Spice particle component
  const SpiceParticle = ({ delay }) => (
    <motion.div
      className="absolute w-2 h-2 bg-red-500 rounded-full"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: [0, 1.5, 0],
        opacity: [0, 0.8, 0],
        y: [-20, 20],
        x: [0, Math.random() * 40 - 20]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 backdrop-blur-sm">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Floating spice particles */}
        {[...Array(8)].map((_, i) => (
          <SpiceParticle key={i} delay={i * 0.15} />
        ))}

        {/* Logo with pulse animation */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src="/logo.png" 
            className="w-20 h-20 drop-shadow-lg" 
            alt="Mahakali Masalas Logo"
          />
        </motion.div>

        {/* Heat wave effect */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-red-500/30 pointer-events-none"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: 1.5,
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </div>

      {/* Text animation */}
      <motion.div className="mt-8 text-center">
        <motion.h2
          className="text-2xl pt-2 font-bold bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent"
          animate={{
            opacity: [0.8, 1, 0.8],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          મહાકાળી Masalas
        </motion.h2>
        
        <motion.div
          className="flex justify-center gap-1 mt-3"
          animate={{
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-red-300">Crafting</span>
          <motion.span
            animate={{
              color: ["#fca5a5", "#ef4444", "#fca5a5"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            className="font-medium"
          >
            authentic
          </motion.span>
          <span className="text-red-300">flavors</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SpicyLoader;