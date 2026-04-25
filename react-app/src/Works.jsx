import { useState, useEffect } from 'react'
import Card from './components/works/Card'
import WorkDetailModal from './components/works/WorkDetailModal'
import { AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './components/Footer'

export default function Works({ onWorkDetailModalChange }) {
  const [selectedWork, setSelectedWork] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    onWorkDetailModalChange?.(selectedWork !== null)
    return () => onWorkDetailModalChange?.(false)
  }, [selectedWork, onWorkDetailModalChange])

  // 作品データ
  const worksData = [
    {
      id: 7,
      title: 'バナー制作',
      tag: '個人制作',
      text: 'デザイン',
      image: '/images/irasuto.jpg',
      tagClassName: 'bg-blue-500',
      description: 'バナーを制作しました',
      technologies: ['Illustrator'],
    },

    {
      id: 5,
      title: 'バナー制作',
      tag: '個人制作',
      text: 'デザイン',
      image: '/images/yuge.png',
      tagClassName: 'bg-blue-500',
      description: '課題でバナーを制作しました',
      technologies: ['Photoshop'],
    },

    {
      id: 3,
      title: '模写サイト',
      tag: '個人制作',
      text: 'webサイト',
      image: '/images/blood.jpeg',
      tagClassName: 'bg-blue-500',
      description: '練習でサイトを模写しました。',
      technologies: ['HTML', 'CSS'],
    },
    {
      id: 2,
      title: '模写サイト',
      tag: '個人制作',
      text: 'webサイト',
      image: '/images/bike.png',
      tagClassName: 'bg-blue-500',
      description: '練習でサイトを模写しました。',
      technologies: ['HTML', 'CSS'],
    },
    {
      id: 9,
      title: 'バイカーの為のマップ',
      tag: 'チーム制作',
      text: 'webサイト',
      image: '/images/b-map.png',
      tagClassName: 'bg-orange-500',
      description:
        '4人で制作したバイカーの為のマップです。自分はデザインを中心に担当しフロントも少し担当しました、気をつけた点はバイカーの方が使うと想定したので視認性を第一にデザインしました、プロトタイプをする時間がなかったのでデプロイ品をお試しくださいhttps://b-map-tan.vercel.app/top',
      technologies: ['React', 'Tailwind CSS'],
    },
    {
      id: 4,
      title: 'ファミレスタッチパネル',
      tag: 'チーム制作',
      text: 'webサイト',
      image: '/images/mantan.png',
      tagClassName: 'bg-orange-500',
      description: `ガストやデニーズなど複数の飲食店に実際に足を運び、既存のセルフオーダー端末における操作のしづらさや情報の伝わりにくさを体験。その課題感をもとに、「直感的で迷わない操作体験」 を軸としたUIデザインを制作しました。
トップ画面から注文完了までの視線誘導を意識した画面構成、カテゴリ一覧と商品カードの情報設計、ページナビゲーション、注文履歴の見せ方まで、一貫したUXの流れとして設計しています。タブレット端末での操作性を考慮し、タップしやすいターゲットサイズや余白の確保にも配慮しました。
配色は視認性を優先し、選択状態・操作可能/不可の状態を色で明確に区別。アレルギー情報はアイコン化することで、文字を読み込まなくても瞬時に判断できるよう設計しました。実際の店舗利用を想定した、わかりやすさと安心感を両立したUI です。プロトタイプですので良かったら閲覧くださいhttps://www.figma.com/proto/5Ssv9FJQed3e4JeSTH3Wpp/%E3%82%AF%E3%83%A9%E3%83%81%E3%83%BC%E3%83%A0?page-id=0%3A1&node-id=19-42&p=f&viewport=322%2C376%2C0.05&t=Cuoe0XCOdmca4AP2-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=385%3A4983&show-proto-sidebar=1`,
      technologies: ['html', 'css', 'javascript'],
    },
    {
      id: 1,
      title: 'ポートフォリオサイト',
      tag: '個人制作',
      text: 'webサイト',
      image: '/images/portfolio.png',
      tagClassName: 'bg-blue-500',
      description:
        '初めてReactを用いた開発に挑戦し、試行錯誤を重ねながらも、直感的に操作できるUIを実現しました。本ポートフォリオでは、「伝わる・使える」を軸に、デザインと実装の両面からユーザー体験を検証しています。レイアウトや配色は、見た目の美しさだけでなく、利用シーンを想定した視認性と操作性を重視して設計しました。Figmaでの設計意図をそのまま体験に落とし込むため、ReactとTailwindで一貫した実装を行っています。',
      technologies: ['React', 'Tailwind CSS'],
    },
    {
      id: 10,
      title: 'iPhoneインスタ用広告バナー',
      tag: '個人制作',
      text: 'デザイン',
      image: '/images/iphone.png',
      tagClassName: 'bg-blue-500',
      description: `学校の課題でiPhone広告バナーを制作しました。最初にターゲットを決めて、そのターゲットに合わせてバナーを制作しました。その分析結果が下記のものです。
    iPhone広告バナー企画 ■ ターゲット都市部に住む女子学生機種変更を検討しており、トレンドや周囲の影響を受けやすい層■ ペルソナ学生（可処分所得が少ない）無料キャンペーンや抽選に積極的
SNS・友人関係を重視
「みんなと同じ」「流行っている」を選びやすい
■ 課題
スマートフォンの買い替えコストが高い
まだ使えるが、古くなっている端末への不満
機種変更のきっかけが不足している
■ ニーズ
できれば無料で最新機種を手に入れたい
お得に乗り換えたい
新生活のタイミングで環境を変えたい
■ インサイト（深層心理）
「周りがiPhoneだから自分も揃えたい」
「どうせ変えるなら今っぽい体験をしたい」
「お得に手に入るならすぐ動きたい」
■ 目的

他社からUQ mobileへの乗り換え促進

■ 提供価値（ベネフィット）
最新iPhoneを持つことで
→ 友人とのコミュニケーションが広がる
→ トレンドに乗れる安心感
抽選という「ワクワク体験」
無料で手に入る可能性による強い動機付け
■ クリエイティブ戦略
コンセプト

👉 「新生活 × 無料 × みんなと一緒」

訴求軸
最新モデル（iPhone16 Pro）
無料（抽選）
限定感（乗り換え限定）
お得感（総額〇〇万円）
トーン＆マナー
水色 × 桜色（春・新生活・やわらかさ）
明るくポジティブ
親しみやすくトレンド感のあるデザイン
■ キーメッセージ
他社からUQ mobileに乗り換えた方限定
抽選でiPhone16 Proが当たる
新生活応援キャンペーン
総額〇〇万円分プレゼント
■ 期待する行動

👉 キャンペーンへのエントリー
👉 SIM乗り換えの検討・実行`,
      technologies: ['Photoshop'],
    },
    {
      id: 8,
      title: 'fitnessアプリ',
      tag: 'チーム制作',
      text: 'webサイト',
      image: '/images/cofit.png',
      tagClassName: 'bg-orange-500',
      description:
        'RIZAP様との産業連携プロジェクトで、5名チームによるフィットネスアプリのプロトタイプ制作に参加し、UIデザインを中心に担当しました。メインカラーには緑を採用しました。緑は自然・健康・成長を連想させる色であり、フィットネスというドメインとの親和性が高く、ユーザーに「体を動かす気持ちよさ」や「着実な成長」を視覚的に伝えられると考えました。また、フィットネス系アプリには赤・オレンジといった暖色系が多く使われる傾向があり、差別化を意識して寒色〜中間色の中から選定。緑は「落ち着き」と「活力」を両立できる色として最適と判断しました。ターゲット層は若者で昨今の若者は運動量が足りないので若者に使ってもらえるアプリというお題でした。プロトタイプはFigmaで公開しています。よろしければご覧ください。https://www.figma.com/proto/2vEMtjZfFxe7lPKvcnjk7h/Cofit?node-id=0-1&t=Lqk27pyFzRZvyvPu-1',
      technologies: ['Next.js', 'Tailwind CSS'],
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

          <Footer
            name={'About'}
            className={'text-black'}
            onClick={() => handleLinkClick('/about', 'about')}
          />

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
