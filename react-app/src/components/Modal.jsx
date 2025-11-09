import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Modal(props) {
  const setIsOpen = props.setIsOpen
  const location = useLocation()// 現在のページのパスを取得
  const navigate = useNavigate()  

  const handleLinkClick = (path, scrollTo) => {
    setIsOpen(false)
    
    navigate(path, { state: { scrollTo } })
  }

  return (
    <motion.aside
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
      className="fixed top-0 right-0 w-[20%] max-w-[320px] h-screen bg-[#3d3d3d] flex flex-col items-center justify-center gap-6 shadow-lg z-50"
    >
      <nav className="flex flex-col gap-4 w-full px-8">
        <button
          onClick={() => handleLinkClick('/', 'top')}
          className="text-white hover:text-gray-300 transition-colors py-3 text-center text-lg font-medium bg-transparent border-none cursor-pointer"
        >
          Top
        </button>
        <button
          onClick={() => handleLinkClick('/works', null)}
          className="text-white hover:text-gray-300 transition-colors py-3 text-center text-lg font-medium bg-transparent border-none cursor-pointer"
        >
          Works
        </button>
        <button
          onClick={() => handleLinkClick('/about', 'about-section')}
          className="text-white hover:text-gray-300 transition-colors py-3 text-center text-lg font-medium bg-transparent border-none cursor-pointer"
        >
          About
        </button>
      </nav>

      <button
        className="mt-8 px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg border border-zinc-700 hover:border-zinc-600 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        ✕ 閉じる
      </button>
    </motion.aside>
  )
}

export default Modal
