export default function About() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 w-full max-w-5xl">
        <div className="w-40 h-40 md:w-72 md:h-72 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="/portfolio/images/IMG_7351.PNG"
            alt="about"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center leading-8 bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-800 shadow-2xl p-6 md:p-8">
          <div className="pb-10">
            <h1 className="text-white text-2xl md:text-3xl font-bold flex justify-center md:justify-start">
              私について
            </h1>
          </div>
          <p className="text-white text-sm md:text-base leading-relaxed">
            2005年生まれ。2024年にVANTANに入学し、Webデザインとフロントエンド開発を学んでいます。
            <br />
            デザインとフロントエンドの両方に携わりながら、
            「見やすく、使いやすいWeb」を目指していきたいです。
            <br />
            FigmaやPhotoshopでのデザイン制作をもとに、
            ReactとTailwindでコーディングを行うことが出来ます。
            <br />
            今後はフロントエンド技術をさらに磨き、
            見る人にとって気持ちの良いWeb体験を届けていきたいです。
          </p>
        </div>
      </div>
    </div>
  )
}
