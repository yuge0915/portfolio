import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

function Modal(props) {
  const setIsOpen = props.setIsOpen
  const location = useLocation()  // 現在のページのパスを取得

  // リンククリック時の処理
  const handleLinkClick = (path) => {
    setIsOpen(false)  // モーダルを閉じる
    
    // 同じページなら上にスクロール
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
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
        <Link
          to="/"
          className="text-white hover:text-gray-300 transition-colors py-3 text-center text-lg font-medium"
          onClick={() => {
            handleLinkClick('/')
          }}
        >
          Top
        </Link>
        <Link
          to="/works"
          className="text-white hover:text-gray-300 transition-colors py-3 text-center text-lg font-medium"
          onClick={() => {
            handleLinkClick('/works')
          }}
        >
          Works
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-gray-300 transition-colors py-3 text-center text-lg font-medium"
          onClick={() => {
            handleLinkClick('/about')
          }}
        >
          About
        </Link>
      </nav>

      <button
        className="mt-8 px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-lg border border-zinc-700 hover:border-zinc-600 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
        onClick={function () {
          setIsOpen(false)
        }}
      >
        ✕ 閉じる
      </button>
    </motion.aside>
  )
}

export default Modal
