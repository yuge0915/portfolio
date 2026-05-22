import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'

import PageFooterNav from '../components/PageFooterNav'
import WorksGrid from '../components/works/WorksGrid'
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
      <div id="works" className="min-h-screen bg-gray-900">
        <h1 className="flex items-center justify-center px-4 pt-24 pb-10 text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl bg-black">
          Works
        </h1>
        <div className="bg-gradient-to-br bg-black">
        <p className="mx-auto max-w-3xl px-4 text-center text-sm leading-relaxed text-gray-100 sm:text-base  bg-black">
          サムネイル一覧から、制作ジャンルやテイストを比較しやすい構成にしています。気になる作品を選ぶと、完成イメージと制作意図を詳細で確認できます。
        </p>
        </div>

        <WorksGrid works={worksData} onWorkClick={setSelectedWork} />

        <PageFooterNav onNavigate={handleLinkClick} copyrightClassName="text-gray-500 text-xs md:text-sm" />
      </div>

      <AnimatePresence>
        {selectedWork && <WorkDetailModal work={selectedWork} onClose={() => setSelectedWork(null)} />}
      </AnimatePresence>
    </>
  )
}
