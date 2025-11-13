import Profile from './components/about/profile'
import Hoby from './components/about/hoby'
import SkillConteiner from './components/SkillConteiner'
import Footer from './components/Footer'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function About() {
  const location = useLocation() // 現在のページのパスを取得
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
    <div className="min-h-screen bg-gray-900" id="about">
      <Profile />
      <SkillConteiner />

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
  )
}
