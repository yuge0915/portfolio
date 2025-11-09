import Profile from './components/about/profile'
import Hoby from './components/about/hoby'
import SkillConteiner from './components/SkillConteiner'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'
export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Profile />
      <Hoby />
      <SkillConteiner />
      
      <div className="flex justify-start pl-8 py-2 bg-white">
        <Link to="/">
          <Footer name={'Tops'} className={'text-black'} />
        </Link>
        <Link to="/works">
          <Footer name={'Works'} className={'text-black'} />
        </Link>
        <Link to="/about">
          <Footer
            name={'About'}
            className={'text-black'}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </Link>
        <small className="ml-auto pr-5 text-white">© 2025 AYUMI YUGE</small>
      </div>
    </div>
  )
}
