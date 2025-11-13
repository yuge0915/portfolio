export default function About() {
  return (
    <div className="min-h-screen  bg-gray-900 flex flex-col justify-center items-center">
      <div className="flex justify-center">
        <div className="h-70 w-70">
        <img src="/portfolio/images/IMG_7351.PNG" alt="about" />
        </div>
        <div className="flex flex-col items-center justify-center ml-10 leading-8 bg-zinc-900/80 backdrop-blur-sm rounded-lg border border-zinc-800 shadow-2xl p-8 md:p-12">
          <div className="pb-10">
            <h1 className="text-white text-2xl font-bold flex justify-center">私について</h1>
          </div>
          <p className="text-white text-base leading-relaxed">
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
