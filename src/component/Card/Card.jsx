import './Card.scss';

const Card = ({beer}) => {

  const lastSentenceIndex = beer.description.indexOf('.', 100) + 1;
  const shortenedText = beer.description.substring(0, lastSentenceIndex);
  
  return (
    <div className="card">
    <img src={beer.image_url} alt="Beer Bottle Pic" />
    <h3>{beer.name}</h3>
    <h4><i>{beer.tagline}</i></h4>
    <p>{shortenedText || beer.description}</p>
    </div>
  );
}

export default Card;