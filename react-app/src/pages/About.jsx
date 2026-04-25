import { useLocation, useNavigate } from 'react-router-dom'

import Profile from '../components/about/profile'
import PageFooterNav from '../components/PageFooterNav'
import SkillConteiner from '../components/SkillConteiner'

export default function About() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleLinkClick = (path, scrollTo) => {
    if (location.pathname === path && scrollTo) {
      const element = document.getElementById(scrollTo)
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    navigate(path, { state: { scrollTo } })
  }

  return (
    <div id="about" className="min-h-screen bg-gray-900">
      <Profile />
      <SkillConteiner />
      <PageFooterNav onNavigate={handleLinkClick} />
    </div>
  )
}
