import { motion } from 'framer-motion'
import DescriptionWithLinks from './DescriptionWithLinks'

export default function WorkDetailModal({ work, onClose }) {
  if (!work) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 sm:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-white shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        {/* 閉じるボタン（スクロール領域の外＝常に右上に固定） */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl text-gray-500 shadow-sm ring-1 ring-gray-200/80 backdrop-blur-sm transition-colors hover:bg-gray-100 hover:text-gray-800 sm:right-3 sm:top-3 sm:h-11 sm:w-11 sm:text-3xl"
          aria-label="閉じる"
        >
          ✕
        </button>

        <div className="min-h-0 flex-1 overflow-y-auto p-4 pt-14 sm:p-8 sm:pt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 pr-10 sm:pr-12">
            {work.title}
          </h2>

          <div className="flex gap-2 sm:gap-3 mb-6 flex-wrap">
            <span className={`px-4 py-1 rounded-full ${work.tagClassName} text-white text-sm`}>
              {work.tag}
            </span>
            <span className="px-4 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
              {work.text}
            </span>
          </div>

          <div className="mb-6 rounded-lg overflow-hidden">
            <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">概要</h3>
            <DescriptionWithLinks text={work.description} />
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">使用技術</h3>
            <div className="flex flex-wrap gap-2">
              {work.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
