import React from 'react'

export default function Card(props) {
  const { title, tag, image, tagClassName, text } = props
  return (
<div className="w-[360px] h-[620px]  rounded-lg  hover:brightness-75 mx-10 flex flex-col justify-end items-start  bg-cover bg-center relative overflow-hidden transition-all duration-300 cursor-pointer"
style={{ backgroundImage: `url(${image})`}}
>
  <div className='w-full rounded-lg bg-gray-100'>
<div className='p-4'>
<div className='flex'>
        <span className={`font-light rounded-full p-1 ${tagClassName}`}>{tag}</span>
        <p className="font-light items-center flex pl-5 opacity-50">{text}</p>
</div>
      <p className="font-medium">{title}</p>
</div>
  </div>
</div>
  )
}
