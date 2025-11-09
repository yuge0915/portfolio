export default function Footer(props) {
  const { name, className, onClick } = props
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
