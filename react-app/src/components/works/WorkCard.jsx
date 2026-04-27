export default function WorkCard({ work, onClick }) {
  return (
    <button
      type="button"
      className="group flex w-full flex-col overflow-hidden rounded-xl bg-white text-left shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onClick={() => onClick(work)}
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={work.image}
          alt={`${work.title} のサムネイル`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-center gap-2">
          <span className={`rounded-full px-2 py-1 text-xs font-light text-white ${work.tagClassName}`}>
            {work.tag}
          </span>
          <p className="text-xs font-light text-gray-500">{work.text}</p>
        </div>
        <p className="text-base font-semibold text-gray-900">{work.title}</p>
        <p className="line-clamp-3 text-sm text-gray-600">{work.summary}</p>
      </div>
    </button>
  )
}
