import { motion } from 'framer-motion'

export default function WorkDetailModal({ work, onClose }) {
  if (!work) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
        onClick={e => e.stopPropagation()}
      >
        {/* 閉じるボタン */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-800 transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
        >
          ✕
        </button>

        <h2 className="text-4xl font-bold mb-4 pr-12">{work.title}</h2>

        <div className="flex gap-3 mb-6 flex-wrap">
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
          <p className="text-gray-700 leading-relaxed text-lg">{work.description}</p>
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
      </motion.div>
    </motion.div>
  )
}

