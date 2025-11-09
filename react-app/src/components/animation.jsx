import React from 'react'
import { motion } from 'framer-motion'

export default function Top() {
  return (
    <section
      className="relative flex flex-col justify-center items-center h-screen text-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black"
      id="animation"
    >
      {/* 背景アニメーション */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 中央テキスト */}
      <motion.h1
        className="text-6xl md:text-7xl font-bold text-white z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Welcome to my portfolio
      </motion.h1>

      <motion.p
        className="text-lg text-gray-300 mt-4 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Web Designer / Frontend Developer
      </motion.p>

      {/* 下のスクロール誘導 */}
      <motion.div
        className="absolute bottom-10 text-gray-400 text-sm z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ↓ Scroll Down
      </motion.div>
    </section>
  )
}
