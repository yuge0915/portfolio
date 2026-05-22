import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Modal from './components/Modal'
import PageFooterNav from './components/PageFooterNav'
import Section from './components/Section'
import SkillConteiner from './components/SkillConteiner'
import Header from './components/Header'
import WorksGrid from './components/works/WorksGrid'
import WorkDetailModal from './components/works/WorkDetailModal'
import Works from './pages/Works'
import About from './pages/About'
import { worksData } from './data/worksData'

const HOME_WORKS_PREVIEW = [...worksData].reverse().slice(0, 5)

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isWorkDetailModalOpen, setIsWorkDetailModalOpen] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setSelectedWork(null)
    if (location.pathname !== '/') {
      setIsWorkDetailModalOpen(false)
    }
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/') {
      setIsWorkDetailModalOpen(selectedWork !== null)
    }
  }, [selectedWork, location.pathname])

  const handleLinkClick = (path, scrollTo) => {
    setSelectedWork(null)

    if (location.pathname === path && scrollTo) {
      const element = document.getElementById(scrollTo)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate(path, { state: { scrollTo } })
    }
  }

  const handleViewMoreClick = () => {
    setSelectedWork(null)
    navigate('/works', { state: { scrollTo: 'works' } })
  }

  return (
    <>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} isWorkDetailModalOpen={isWorkDetailModalOpen} />
      <AnimatePresence>{isOpen && <Modal setIsOpen={setIsOpen} />}</AnimatePresence>

      <Routes>
        <Route
          path="/"
          element={
            <main id="top">
              <h1 className="text-4xl font-bold text-white flex items-center justify-center pt-10 pb-2 px-2 bg-black">Works</h1>
              <WorksGrid
                id="works"
                works={HOME_WORKS_PREVIEW}
                onWorkClick={setSelectedWork}
                reverse={false}
                className="pb-4 pt-24"
              />
              <div className="flex justify-center pb-10 bg-black">
                <button
                  type="button"
                  onClick={handleViewMoreClick}
                  className="rounded-lg border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                >
                  View more
                </button>
              </div>
              <div className="w-full min-h-screen">
                <SkillConteiner />
              </div>
              <Section name={'Contact'} className={''} />
              <PageFooterNav onNavigate={handleLinkClick} />
            </main>
          }
        />
        <Route path="/works" element={<Works onWorkDetailModalChange={setIsWorkDetailModalOpen} />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <AnimatePresence>
        {location.pathname === '/' && selectedWork && (
          <WorkDetailModal work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default App
