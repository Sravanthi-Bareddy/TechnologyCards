import './index.css'

const CardListDetails = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`{className} card-item`}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-description">{description}</p>
      <img src={imgUrl} className="profile-logo" alt={title} />
    </li>
  )
}
export default CardListDetails
