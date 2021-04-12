const Card = ({image, title, description}) => {
  return (
    <div className="card">
      <div className="card__body">
        <img className="card__image" src={ image } />
        <h4 className="card__title">{ title }</h4>
        <p className="card__description">{ description }</p>
      </div>
      <button className="card__btn">View Recipe</button>
    </div>
  )
}

export default Card;