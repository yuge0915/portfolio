export default function Section(props) {
  const { name, className } = props

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-8 py-20 relative overflow-hidden ${className}`}
    >
      {/* 黒を基調とした背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      {/* グリッドパターン（オプション） */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-4xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">{name}</h2>
          <p className="text-xl text-gray-400">お気軽にお問い合わせください</p>
        </div>

        <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-800 shadow-2xl pt-3 pb-3">
          {/* メールアドレス */}
          <div className="">
            <div className="flex items-center justify-center gap-2">
              <div className="flex-shrink-0 w-12 h- bg-zinc-800 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <a
                href="mailto:yuge.a.24kdg@gmail.com"
                className="text-2xl md:text-3xl font-semibold text-gray-200 hover:text-white transition-colors duration-300 group-hover:underline"
              >
                yuge.a.24kdgh@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
