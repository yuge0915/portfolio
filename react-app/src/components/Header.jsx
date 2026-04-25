export default function Header({ setIsOpen, isOpen, isWorkDetailModalOpen = false }) {
  const showMenu = !isOpen && !isWorkDetailModalOpen

  return (
    <header className="w-full h-16 text-black flex justify-end items-center fixed z-[9999] ">
      {/* メニューボタン - ナビモーダル・Works詳細モーダルが閉じているときだけ表示 */}
      {showMenu && (
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
