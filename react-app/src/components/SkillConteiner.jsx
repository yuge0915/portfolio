import SkillBar from './SkillBar'

export default function SkillConteiner() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 max-w-5xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">Skills</h2>
          <p className="text-xl text-gray-400">
            Webコーディング、モックアップ、フォトショップによる画像加工などが出来ます
          </p>
        </div>

        {/* スキルバー */}
        <div className="bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-800 shadow-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-12">
            {/* 左側のスキル（Web系）*/}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-6">Web Development</h3>
              <SkillBar skill="HTML" level={80} color="#9fe3ff" />
              <SkillBar skill="CSS" level={50} color="#9fe3ff" />
              <SkillBar skill="JavaScript" level={40} color="#7ddfff" />
            </div>

            {/* 右側のスキル（デザイン系）*/}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-6">Design Tools</h3>
              <SkillBar skill="Photoshop" level={50} color="#f97316" />
              <SkillBar skill="Illustrator" level={30} color="#fb923c" />
              <SkillBar skill="Figma" level={60} color="#fdba74" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
