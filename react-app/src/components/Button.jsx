import React from 'react'

export function Button({ name, className }) {
  return (
    <button className={`cursor-pointer text-black bg-amber-50 pr-4 pl-4  ${className}`}>
      {name}
    </button>
  )
}
