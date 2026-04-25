export default function Footer({ name, className, onClick }) {
  return (
    <footer className="flex pr-10">
      <button type="button" className={className} onClick={onClick}>
        {name}
      </button>
    </footer>
  )
}
