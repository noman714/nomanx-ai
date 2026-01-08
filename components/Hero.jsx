"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/ai-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold drop-shadow-[0_0_30px_rgba(0,170,255,0.7)]"
        >
          NomanX <span className="text-cyan-400">AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-lg text-gray-300"
        >
          Your Creative AI Partner
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex flex-col gap-4 items-center"
        >
          {[
            "AI Chat Assistant",
            "AI Image Tools",
            "Voice Tools",
            "Secure & Fast",
          ].map((item) => (
            <div
              key={item}
              className="w-64 backdrop-blur-xl bg-white/10 border border-white/20
              rounded-xl py-3 shadow-lg hover:bg-white/20 transition"
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* Owner */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-10 text-sm text-gray-400"
        >
          Owned & Managed by <span className="text-cyan-400">Noman Ali</span>
        </motion.p>

      </div>
    </div>
  );
}
