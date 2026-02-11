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
      id: 7,
      title: 'バナー制作',
      tag: '個人制作',
      text: 'デザイン',
      image: '/portfolio/images/irasuto.jpg',
      tagClassName: 'bg-orange-500',
      description: 'バナーを制作しました',
      technologies: ['Illustrator'],
    },
    // {
    //   id: 6,
    //   title: 'バナー制作',
    //   tag: '個人制作',
    //   text: 'デザイン',
    //   image: '/portfolio/images/iphone.png',
    //   tagClassName: 'bg-orange-500',
    //   description: '課題でバナーを制作しました',
    //   technologies: ['Photoshop'],
    // },
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
      id: 4,
      title: 'ファミレスタッチパネル',
      tag: 'チーム制作',
      text: 'webサイト',
      image: '/portfolio/images/mantan.png',
      tagClassName: 'bg-blue-500',
      description: '4人で制作したファミレスのタッチパネルです。プロトタイプですので良かったら閲覧くださいhttps://www.figma.com/proto/5Ssv9FJQed3e4JeSTH3Wpp/%E3%82%AF%E3%83%A9%E3%83%81%E3%83%BC%E3%83%A0?page-id=0%3A1&node-id=19-42&p=f&viewport=322%2C376%2C0.05&t=Cuoe0XCOdmca4AP2-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=385%3A4983&show-proto-sidebar=1',
      technologies: ['html', 'css', 'javascript'],
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
      id: 1,
      title: 'ポートフォリオサイト',
      tag: '個人制作',
      text: 'webサイト',
      image: '/portfolio/images/portfolio.png',
      tagClassName: 'bg-blue-500',
      description: 'React + Tailwind CSSで制作した個人ポートフォリオサイトです、初めてreactを使って制作したので苦戦しましたがよくできたと思います、直感的に使えるようにデザインしました。頑張った所はモーダルとフッターを押すとスクロールするようにしました。',
      technologies: ['React', 'Tailwind CSS'],
    },
    {
      id: 8,
      title: 'fitnessアプリ',
      tag: 'チーム制作',
      text: 'webサイト',
      image: '/portfolio/images/cofit.png',
      tagClassName: 'bg-orange-500',
      description: 'RIZAP様との産業連携5人で制作したフィットネスアプリです。自分はデザインを中心に担当しました、心がけた点はユーザーにとって使いやすいように色にこだわりました最初はオレンジなどの暖色系の色のあんが出ていましたがそれでは他のチームとかぶってしまったりするので緑系に変えてはみたもののデュオリンゴをイメージしてしまうようなカラーになってしまったので何個か案を出した上でユーザーにとって見やすいこのカラーになりました、プロトタイプですので良かったら閲覧くださいhttps://www.figma.com/proto/2vEMtjZfFxe7lPKvcnjk7h/Cofit?node-id=0-1&t=Lqk27pyFzRZvyvPu-1',
      technologies: ['Next.js', 'Tailwind CSS'],
    },
    {
      id: 9,
      title: 'バイカーの為のマップ',
      tag: 'チーム制作',
      text: 'webサイト',
      image: 'https://placehold.jp/150x150.png',
      tagClassName: 'bg-orange-500',
      description: '4人で制作したバイカーの為のマップです。自分はデザインを中心に担当しフロントも少し担当しました、気をつけた点はバイカーの方が使うと想定したので視認性を第一にデザインしました、プロトタイプをする時間がなかったのでデプロイ品をお試しくださいhttps://b-map-tan.vercel.app/top',
      technologies: ['React', 'Tailwind CSS'],
    },
  ]

  const handleLinkClick = (path, scrollTo) => {
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white flex items-center justify-center text-center pt-24 pb-10 px-4">
          Works
        </h1>

        <div className="flex items-center justify-center mb-12 flex-wrap gap-8 px-4 sm:px-6 md:px-8">
        {[...worksData].reverse().map(work => (
            <div key={work.id}>
              <Card work={work} onClick={handleCardClick} />
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-start md:justify-start gap-3 md:gap-0 pl-4 md:pl-8 py-3 bg-white">
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

          <Footer name={'About'} className={'text-black'} onClick={() => handleLinkClick('/about', 'about')} />

          <small className="md:ml-auto md:pr-5 text-gray-500 text-xs md:text-sm mt-1 md:mt-0">
            2025 AYUMI YUGE
          </small>
        </div>
      </div>

      {/* モーダル */}
      <AnimatePresence>
        {selectedWork && <WorkDetailModal work={selectedWork} onClose={handleCloseModal} />}
      </AnimatePresence>
    </>
  )
}
