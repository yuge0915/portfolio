export const worksData = [
  {
    id: 3,
    title: '模写サイト',
    tag: '個人制作',
    text: 'webサイト',
    image: '/images/blood.jpeg',
    tagClassName: 'bg-blue-500',
    summary: '既存サイトを模写し、レイアウトと余白設計を学んだ制作です。',
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
    summary: 'トンマナの再現と実装精度を意識して取り組んだ模写制作です。',
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
    summary: 'バイカー向けに視認性を重視して設計したチーム開発のマップです。',
    description:
      '4人で制作した、バイカー向けのマップアプリです。\n\n私はデザインを中心に、一部フロント実装も担当しました。屋外利用を想定し、情報の読み取りやすさを最優先にレイアウトと配色を設計しています。',
    technologies: ['React', 'Tailwind CSS'],
    links: [{ label: 'デプロイ版を見る', url: 'https://b-map-tan.vercel.app/top' }],
  },
  {
    id: 4,
    title: 'ファミレスタッチパネル',
    tag: 'チーム制作',
    text: 'webサイト',
    image: '/images/mantan1.jpeg',
    images: ['/images/mantan1.jpeg','/images/mantan2.jpeg','/images/mantan3.jpeg','/images/mantan4.jpeg'],
    tagClassName: 'bg-orange-500',
    summary: 'セルフオーダー端末の課題を改善するUIを設計したチーム制作です。',
    description: `ガストやデニーズなど複数の飲食店に実際に足を運び、既存のセルフオーダー端末における操作のしづらさや情報の伝わりにくさを体験。その課題感をもとに、「直感的で迷わない操作体験」 を軸としたUIデザインを制作しました。
トップ画面から注文完了までの視線誘導を意識した画面構成、カテゴリ一覧と商品カードの情報設計、ページナビゲーション、注文履歴の見せ方まで、一貫したUXの流れとして設計しています。

タブレット端末での操作性を考慮し、タップしやすいターゲットサイズと余白を確保しました。配色は視認性を重視し、選択状態や操作可否を色で明確に区別しています。`,
    technologies: ['html', 'css', 'javascript'],
    links: [
      {
        label: 'Figmaプロトタイプを見る',
        url: 'https://www.figma.com/proto/5Ssv9FJQed3e4JeSTH3Wpp/%E3%82%AF%E3%83%A9%E3%83%81%E3%83%BC%E3%83%A0?page-id=0%3A1&node-id=19-42&p=f&viewport=322%2C376%2C0.05&t=Cuoe0XCOdmca4AP2-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=385%3A4983&show-proto-sidebar=1',
      },
    ],
  },
  {
    id: 1,
    title: 'ポートフォリオサイト',
    tag: '個人制作',
    text: 'webサイト',
    image: '/images/portfolio.png',
    tagClassName: 'bg-blue-500',
    summary: 'React と Tailwind で構築した、自身のポートフォリオサイトです。',
    description:
      '初めてReactを用いた開発に挑戦し、試行錯誤を重ねながらも、直感的に操作できるUIを実現しました。本ポートフォリオでは、「伝わる・使える」を軸に、デザインと実装の両面からユーザー体験を検証しています。レイアウトや配色は、見た目の美しさだけでなく、利用シーンを想定した視認性と操作性を重視して設計しました。Figmaでの設計意図をそのまま体験に落とし込むため、ReactとTailwindで一貫した実装を行っています。',
    technologies: ['React', 'Tailwind CSS'],
  },
  {
    id: 13,
    title: '模写制作',
    tag: '個人制作',
    text: '模写',
    image: '/images/pointzakuzaku.jpg',
    images: ['/images/pointzakuzaku.jpg'],
    tagClassName: 'bg-blue-500',
    summary: 'ポイントザクザクのバナーを模写しました。',
    description: 'ポイントザクザクのバナーを模写しました。',
    technologies: ['Figma'],

  },
  {
    id: 12,
    title: '模写制作',
    tag: '個人制作',
    text: '模写',
    image: '/images/500p.png',
    images: ['/images/500p.png'],
    tagClassName: 'bg-blue-500',
    summary: '500ポイントのバナーを模写しました。',
    description: '500ポイントのバナーを模写しました。',
    technologies: ['Figma'],
  },
  {
    id: 11,
    title: '模写制作',
    tag: '個人制作',
    text: '模写',
    image: '/images/osechi.jpg',
    images: ['/images/osechi.jpg'],
    tagClassName: 'bg-blue-500',
    summary: 'お正月用の模写制作です。',
    description: 'お正月用の模写制作です。',
    technologies: ['Figma'],
  },
  {
    id: 14,
    title: 'webデザイン制作',
    tag: '個人制作',
    text: 'webデザイン',
    image: '/images/cafeTop.jpg',
    images: ['/images/cafe.jpg'],
    tagClassName: 'bg-blue-500',
    summary: '架空のカフェブランド向け、コンセプト設計からビジュアルデザインまで',
    description: 'コーヒーや自然素材をイメージしたカラーで統一。ブラウン系のアクセントカラーで温かみと落ち着きを表現しました。',
    technologies: ['Figma'],
  },
  {
    id: 15,
    title: 'webデザイン制作',
    tag: '個人制作',
    text: 'webデザイン',
    image: '/images/dent.jpg',
    images: ['/images/dent.jpg','/images/dentTop.jpg','/images/dentPhone.jpg'],
    tagClassName: 'bg-blue-500',
    summary: 'デザインコンセプトは清潔感と信頼感を重視した歯科クリニックのコーポレートサイト。青と白を基調としたカラーパレットで、医療機関としての安心感と現代的な洗練さを両立。ユーザーが直感的に情報にアクセスできるよう、視覚的な階層構造とわかりやすいナビゲーションを設計しました',
    description: `デザインコンセプトは清潔感と信頼感を重視した歯科クリニックのコーポレートサイト。青と白を基調としたカラーパレットで、医療機関としての安心感と現代的な洗練さを両立。ユーザーが直感的に情報にアクセスできるよう、視覚的な階層構造とわかりやすいナビゲーションを設計しましたカラーデザイン\n\nメインカラー：清潔感を表現する爽やかなブルー\n\nベースカラー：白とライトグレーのグラデーションで柔らかい印象\n\nアクセント：青の濃淡で視線誘導を実現\n\nレイアウト

スクロールに応じて展開する7つのセクション構成
各セクションに明確な役割を持たせた情報設計
アイコンとビジュアルで視認性を向上
カードデザインで情報のグルーピングを明確化
タイポグラフィ

可読性の高い日本語フォント
適切な行間とフォントサイズで読みやすさを確保
見出しと本文の明確な階層構造
レスポンシブデザイン

モバイルファーストアプローチ
320px〜の全デバイスサイズに対応
ハンバーガーメニューによるスマホ最適化
タッチ操作に適したボタンサイズ（最小44x44px）
ブレークポイント：sm(640px), md(768px), lg(1024px)としてレスポンシブデザインを実現しました。`,
    technologies: ['Figma','Tailwind CSS'],
  },
  {
    id: 10,
    title: '広告バナー制作',
    tag: '個人制作',
    text: 'デザイン',
    image: '/images/iphone.png',
    images: ['/images/iphone.png'],
    tagClassName: 'bg-blue-500',
    summary: 'iPhone広告バナーを制作しました。ターゲットを「都市部に住む女子学生」に設定し、トレンド性と参加したくなるお得感を重視して情報設計しています。',
    description: `学校課題として作りましたので一つだけ紹介します、iPhone広告バナーを制作しました。

ターゲットを「都市部に住む女子学生」に設定し、トレンド性と参加したくなるお得感を重視して情報設計しています。

コンセプトは「新生活 × 無料 × みんなと一緒」。水色と桜色を軸に、春らしさと親しみやすさを両立したトーンで制作しました。`,
    technologies: ['Photoshop'],
  },
  {
    id: 8,
    title: 'fitnessアプリ',
    tag: 'チーム制作',
    text: 'webサイト',
    image: '/images/cofitComplete.jpeg',
    images: ['/images/cofitComplete.jpeg','/images/home.jpeg','/images/login.jpeg'],
    tagClassName: 'bg-orange-500',
    summary: 'RIZAP様連携PJで制作した、若年層向けフィットネスアプリのUIです。',
    description:
      'RIZAP様との産業連携プロジェクトで、5名チームによるフィットネスアプリのプロトタイプ制作に参加し、UIデザインを担当しました。\n\nメインカラーには緑を採用し、「健康」「成長」「継続しやすさ」を視覚的に伝えることを狙っています。若年層をターゲットに、使い始めのハードルを下げる構成を意識しました。',
    technologies: ['Next.js', 'Tailwind CSS'],
    links: [
      {
        label: 'Figmaプロトタイプを見る',
        url: 'https://www.figma.com/proto/2vEMtjZfFxe7lPKvcnjk7h/Cofit?node-id=0-1&t=Lqk27pyFzRZvyvPu-1',
      },
    ],
  },
]
