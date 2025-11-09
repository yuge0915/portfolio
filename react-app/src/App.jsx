import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Modal from './components/Modal'
import Section from './components/Section'
import Top from './components/animation'
import SkillConteiner from './components/SkillConteiner'
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import Works from './Works'
import About from './About'
import { Link } from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false)

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

              <div className="flex justify-start pl-8 py-2">
                <Link to="/">
                  <Footer
                    name={'Tops'}
                    className={'text-black'}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  />
                </Link>
                <Link to="/works">
                  <Footer name={'Works'} className={'text-black'} />
                </Link>
                <Link to="/about">
                  <Footer name={'About'} className={'text-black'} />
                </Link>
                <small className="ml-auto pr-5">2025 AYUMI YUGE</small>
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