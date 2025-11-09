import React from 'react'

export function Button(props) {
  // props.name や props.className を使える
  const { name, className } = props

  return (
    <button className={`cursor-pointer text-black bg-amber-50 pr-4 pl-4  ${className}`}>
      {name}
    </button>
  )
}
