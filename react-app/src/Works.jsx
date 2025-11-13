import { useState } from 'react'
import Card from './components/works/card'
import WorkDetailModal from './components/works/WorkDetailModal'
import { AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'

export default function Works() {
  const [selectedWork, setSelectedWork] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()
  
  

  // 作品データ
  const worksData = [
    {
      id: 1,
      title: 'ポートフォリオサイト',
      tag: '個人制作',
      text: 'webサイト',
      image: '/portfolio/images/portfolio.png',  
      tagClassName: 'bg-blue-500',
      description: 'React + Tailwind CSSで制作した個人ポートフォリオサイトです。',
      technologies: ['React', 'Tailwind CSS'],
    },
    {
      id: 2,
      title: '模写サイト',
      tag: '個人制作',
      text: 'webサイト',
      image: '/portfolio/images/bike.png',  
      tagClassName: 'bg-blue-500',
      description: '練習でサイトを模写しました。',
      technologies: ['HTML', 'CSS'],
    },
    {
      id: 3,
      title: '模写サイト',
      tag: '個人制作',
      text: 'webサイト',
      image: '/portfolio/images/blood.jpeg',  
      tagClassName: 'bg-blue-500',
      description: '練習でサイトを模写しました。',
      technologies: ['HTML', 'CSS'],
    },
    {
      id: 4,
      title: 'ファミレスタッチパネル',
      tag: 'チーム制作',
      text: 'webサイト',
      image: '/portfolio/images/mantan.png',  
      tagClassName: 'bg-blue-500',
      description: '4人で制作したファミレスのタッチパネルです。',
      technologies: ['html', 'css', 'javascript'],
    },
    {
      id: 5,
      title: 'バナー制作',
      tag: '個人制作',
      text: 'デザイン',
      image: '/portfolio/images/yuge.png', 
      tagClassName: 'bg-orange-500',
      description: '課題でバナーを制作しました',
      technologies: ['Photoshop'],
    },
    {
        id: 6,
        title: 'バナー制作',
        tag: '個人制作',
        text: 'デザイン',
        image: '/portfolio/images/iphone.png', 
        tagClassName: 'bg-orange-500',
        description: '課題でバナーを制作しました',
        technologies: ['Photoshop'],
      },
      {
        id: 7,
        title: 'バナー制作',
        tag: '個人制作',
        text: 'デザイン',
        image: '/portfolio/images/irasuto.jpg', 
        tagClassName: 'bg-orange-500',
        description: 'バナーを制作しました',
        technologies: ['Illustrator'],
      },
  ]

  const handleLinkClick = (path, scrollTo) => {
    // 常にモーダルを閉じる
    setSelectedWork(null)
    
    if (location.pathname === path && scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      navigate(path, { state: { scrollTo } })
    }
  }

  const handleCardClick = work => {
    setSelectedWork(work)
  }

  const handleCloseModal = () => {
    setSelectedWork(null)
  }

  return (
    <>
      <div className="min-h-screen bg-gray-500" id="works">
        <h1 className="text-6xl font-bold text-white flex items-center justify-center pt-20 pb-10">
          Works
        </h1>

        <div className="flex items-center justify-center mb-15 flex-wrap gap-8 px-8">
          {worksData.map(work => (
            <div key={work.id}>
              <Card work={work} onClick={handleCardClick} />
            </div>
          ))}
        </div>

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
      </div>

      {/* モーダル */}
      <AnimatePresence>
        {selectedWork && <WorkDetailModal work={selectedWork} onClose={handleCloseModal} />}
      </AnimatePresence>
    </>
  )
}
