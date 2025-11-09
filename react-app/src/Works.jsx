import Card from './components/works/card'
import { useState } from 'react'
export default function Works() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="min-h-screen bg-gray-500">
        <h1 className="text-6xl font-bold text-white  flex items-center justify-center">Works</h1>
        <div className="flex items-center justify-center">
          <div>
            <Card title="ポートフォリオサイト" tag="個人制作" text="webサイト" image="../public/images/portfolio.png" className="h-[400px]" tagClassName="bg-blue-500 " />
          </div>
          <div>
            <Card title="模写サイト" tag="個人制作" text="webサイト" image="../public/images/bike.png" tagClassName="bg-blue-500 " />
          </div>
          <div>
            <Card title="模写サイト" tag="個人制作" image="../public/images/blood.jpeg" text="webサイト" tagClassName="bg-blue-500 " />
          </div>
        </div>
      </div>
    </>
  )
}
