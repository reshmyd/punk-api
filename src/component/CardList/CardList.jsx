import './CardList.scss';
import Card from '../Card/Card.jsx';

const CardList = ({beers}) => {
  
  const beerJsx = beers.map(elem => <Card beer={elem} />);
  
  return (
    <div className="card-container">
      {beerJsx}
    </div>
  );
}

export default CardList;