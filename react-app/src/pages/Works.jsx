import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

import PageFooterNav from '../components/PageFooterNav'
import Card from '../components/works/Card'
import WorkDetailModal from '../components/works/WorkDetailModal'
import { worksData } from '../data/worksData'

export default function Works({ onWorkDetailModalChange }) {
  const [selectedWork, setSelectedWork] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    onWorkDetailModalChange?.(selectedWork !== null)
    return () => onWorkDetailModalChange?.(false)
  }, [selectedWork, onWorkDetailModalChange])

  const handleLinkClick = (path, scrollTo) => {
    setSelectedWork(null)

    if (location.pathname === path && scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo)
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
      return
    }

    navigate(path, { state: { scrollTo } })
  }

  return (
    <>
      <div id="works" className="min-h-screen bg-gray-500">
        <h1 className="flex items-center justify-center px-4 pt-24 pb-10 text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Works
        </h1>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 px-4 sm:px-6 md:px-8">
          {[...worksData].reverse().map(work => (
            <div key={work.id}>
              <Card work={work} onClick={setSelectedWork} />
            </div>
          ))}
        </div>

        <PageFooterNav onNavigate={handleLinkClick} copyrightClassName="text-gray-500 text-xs md:text-sm" />
      </div>

      <AnimatePresence>
        {selectedWork && <WorkDetailModal work={selectedWork} onClose={() => setSelectedWork(null)} />}
      </AnimatePresence>
    </>
  )
}
