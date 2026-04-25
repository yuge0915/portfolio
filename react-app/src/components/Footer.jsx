export default function Footer({ name, className, onClick }) {
  return (
    <footer className="flex">
      <ul className="pr-10 cursor-pointer">
        <li className={`${className}`} onClick={onClick}>
          {name}
        </li>
      </ul>
    </footer>
  )
}
