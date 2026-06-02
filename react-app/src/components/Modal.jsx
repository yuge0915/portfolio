import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Modal({ setIsOpen }) {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLinkClick = (path, scrollTo) => {
    setIsOpen(false)
    if (location.pathname === path && scrollTo) {
      const element = document.getElementById(scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate(path, { state: { scrollTo } })
    }
  }

  const navLinkClassName =
    'min-h-12 w-full cursor-pointer rounded-lg border-none bg-transparent py-3 text-center text-xl font-medium text-white transition-colors hover:bg-white/10 hover:text-gray-300'

  return (
    <motion.aside
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.35, ease: 'easeOut' }}
      className="fixed top-0 right-0 z-50 flex h-screen w-[min(100%,18rem)] flex-col items-stretch justify-between gap-6 bg-[#3d3d3d] px-5 py-10 shadow-lg md:w-[20%] md:max-w-[320px]"
    >
      <nav className="flex w-full flex-col gap-2">
        <button type="button" onClick={() => handleLinkClick('/', 'top')} className={navLinkClassName}>
          Top
        </button>
        <button
          type="button"
          onClick={() => handleLinkClick('/works', 'works')}
          className={navLinkClassName}
        >
          Works
        </button>
        <button
          type="button"
          onClick={() => handleLinkClick('/about', 'about')}
          className={navLinkClassName}
        >
          About
        </button>
      </nav>

      <button
        type="button"
        className="mb-8 mt-4 w-full min-h-12 shrink-0 cursor-pointer rounded-lg border border-zinc-700 bg-zinc-800 px-6 py-3.5 text-base font-medium text-white shadow-md transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-700 hover:shadow-lg"
        onClick={() => setIsOpen(false)}
        aria-label="メニューを閉じる"
      >
        ✕ 閉じる
      </button>
    </motion.aside>
  )
}

export default Modal
