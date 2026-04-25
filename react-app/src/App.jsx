import Modal from './components/Modal'
import PageFooterNav from './components/PageFooterNav'
import Section from './components/Section'
import Top from './components/animation'
import SkillConteiner from './components/SkillConteiner'
import { AnimatePresence } from 'framer-motion'
import Works from './pages/Works'
import About from './pages/About'
import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Header from './components/Header'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isWorkDetailModalOpen, setIsWorkDetailModalOpen] = useState(false)
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
      <Header setIsOpen={setIsOpen} isOpen={isOpen} isWorkDetailModalOpen={isWorkDetailModalOpen} />
      <AnimatePresence>{isOpen && <Modal setIsOpen={setIsOpen} />}</AnimatePresence>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Top />
              <div className="w-full min-h-screen">
                <SkillConteiner />
              </div>
              <Section name={'Contact'} className={''} />
              <PageFooterNav onNavigate={handleLinkClick} />
            </>
          }
        />
        <Route
          path="/works"
          element={<Works onWorkDetailModalChange={setIsWorkDetailModalOpen} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
