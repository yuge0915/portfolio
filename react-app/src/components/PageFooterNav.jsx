import Footer from './Footer'

export default function PageFooterNav({ onNavigate, copyrightClassName = 'text-white' }) {
  return (
    <div className="flex items-center justify-start gap-3 bg-white py-3 pl-4 md:flex-row md:gap-0 md:pl-8">
      <Footer name="Top" className="text-black" onClick={() => onNavigate('/', 'top')} />
      <Footer name="Works" className="text-black" onClick={() => onNavigate('/works', 'works')} />
      <Footer name="About" className="text-black" onClick={() => onNavigate('/about', 'about')} />
      <small className={`ml-auto pr-5 ${copyrightClassName}`}>© 2025 AYUMI YUGE</small>
    </div>
  )
}
