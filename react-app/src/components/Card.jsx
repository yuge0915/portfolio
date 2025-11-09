export default function Card({ title, description }) {
  return (
    <div className="flex items-center justify-between ">
      <p>{title}</p>
      <p>{description}</p>
    </div>
  )
}
