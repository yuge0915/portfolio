import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import DescriptionWithLinks from './DescriptionWithLinks'

export default function WorkDetailModal({ work, onClose }) {
  if (!work) return null

  const images = useMemo(() => {
    if (Array.isArray(work.images) && work.images.length > 0) {
      return work.images
    }
    return work.image ? [work.image] : []
  }, [work])

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    setActiveImageIndex(0)
  }, [work.id])

  const hasMultipleImages = images.length > 1

  const handlePrevImage = () => {
    setActiveImageIndex(prevIndex => {
      if (prevIndex === 0) {
        return images.length - 1
      }
      return prevIndex - 1
    })
  }

  const handleNextImage = () => {
    setActiveImageIndex(prevIndex => (prevIndex + 1) % images.length)
  }

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

          <div className="mb-6">
            <h3 className="mb-3 text-2xl font-bold text-gray-800">完成イメージ</h3>
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              {images.length > 0 ? (
                <img
                  src={images[activeImageIndex]}
                  alt={`${work.title} のイメージ ${activeImageIndex + 1}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-64 items-center justify-center text-sm text-gray-500 sm:h-80">
                  画像は準備中です
                </div>
              )}

              {hasMultipleImages && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/55 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-black/70"
                    aria-label="前の画像"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/55 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-black/70"
                    aria-label="次の画像"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {hasMultipleImages && (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`h-12 w-20 overflow-hidden rounded border-2 transition-colors ${
                      index === activeImageIndex
                        ? 'border-gray-900'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    aria-label={`${index + 1}枚目の画像を表示`}
                  >
                    <img src={image} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">概要</h3>
            <DescriptionWithLinks text={work.description} />
          </div>

          {work.links?.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-3 text-2xl font-bold text-gray-800">関連リンク</h3>
              <div className="flex flex-wrap gap-3">
                {work.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

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
