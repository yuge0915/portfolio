import React from 'react'

export default function Header({ setIsOpen, isOpen }) {
  return (
    <header className="w-full h-16 text-black flex justify-end items-center fixed z-[9999] ">
      {/* メニューボタン - isOpen が false のときだけ表示 */}
      {!isOpen && (
        <button
          className="rounded-[17px] border-[1px] border-white text-white text-[12px] px-3 py-2 h-fit mr-[45px] cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Menu
        </button>
      )}
    </header>
  )
}
