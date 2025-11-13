import Modal from './components/Modal'
import Section from './components/Section'
import Top from './components/animation'
import SkillConteiner from './components/SkillConteiner'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import Works from './Works'
import About from './About'
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation() 
  const navigate = useNavigate()  

  const handleLinkClick = (path, scrollTo) => {
    if (location.pathname === path && scrollTo) {
      const element = document.getElementById(scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      // 別のページの場合、state を渡してナビゲート
      navigate(path, { state: { scrollTo } })
    }
  }

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <AnimatePresence>{isOpen && <Modal setIsOpen={setIsOpen} />}</AnimatePresence>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Top />
              <div className="w-full h-screen">
                <SkillConteiner />
              </div>
              <Section name={'Contact'} className={''} />

              <div className="flex justify-start pl-8 py-2 bg-white">
        <Footer
          name={'Tops'}
          className={'text-black'}
          onClick={() => handleLinkClick('/', 'top')}
        />

        <Footer
          name={'Works'}
          className={'text-black'}
          onClick={() => handleLinkClick('/works', 'works')}
        />

        <Footer
          name={'About'}
          className={'text-black'}
          onClick={() => handleLinkClick('/about', 'about')}
        />

        <small className="ml-auto pr-5 text-white">© 2025 AYUMI YUGE</small>
      </div>
            </>
          }
        />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
