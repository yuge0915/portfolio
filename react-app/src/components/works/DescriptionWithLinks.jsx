const URL_SPLIT = /(https?:\/\/[^\s]+)/gi

export default function DescriptionWithLinks({ text, className = '' }) {
  if (!text) return null

  const parts = text.split(URL_SPLIT)

  return (
    <p
      className={`text-gray-700 leading-relaxed text-base sm:text-lg whitespace-pre-line ${className}`}
    >
      {parts.map((part, index) => {
        if (/^https?:\/\//i.test(part)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline underline-offset-2 break-all hover:text-blue-800"
              onClick={e => e.stopPropagation()}
            >
              {part}
            </a>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </p>
  )
}
