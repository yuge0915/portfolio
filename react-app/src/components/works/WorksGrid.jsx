import WorkCard from './WorkCard'

export default function WorksGrid({ works, onWorkClick, reverse = true, id, className = '' }) {
  const list = reverse ? [...works].reverse() : works

  return (
    <section
      id={id}
      className={`relative overflow-hidden px-8 py-20 ${className}`.trim()}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="relative z-10 mx-auto mb-12 grid max-w-6xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
        {list.map(work => (
          <WorkCard key={work.id} work={work} onClick={onWorkClick} />
        ))}
      </div>
    </section>
  )
}
