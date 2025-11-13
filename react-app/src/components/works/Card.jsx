import React from 'react'

export default function Card({ work, onClick }) {
  return (
    <div
      className="w-[360px] h-[620px] rounded-lg hover:brightness-75 mx-10 flex flex-col justify-end items-start bg-cover bg-center relative overflow-hidden transition-all duration-300 cursor-pointer"
      style={{ backgroundImage: `url(${work.image})` }}
      onClick={() => onClick(work)}
    >
      <div className="w-full rounded-lg bg-gray-100">
        <div className="p-4">
          <div className="flex items-center">
            <span className={`font-light rounded-full p-1 ${work.tagClassName}`}>{work.tag}</span>
            <p className="font-light pl-5 opacity-50">{work.text}</p>
          </div>
          <p className="font-medium">{work.title}</p>
        </div>
      </div>
    </div>
  )
}
