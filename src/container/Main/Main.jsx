import CardList from '../../component/CardList/CardList.jsx';

const Main = ({allBeers, filteredBeers, acidicBeers, highABVBeers, acidicAndHighABV, isHighABV, isAcidic}) => {
  return (
    <div>
      {!isAcidic && !isHighABV && <CardList beers={filteredBeers || allBeers} />}
      {isAcidic && isHighABV && <CardList beers={acidicAndHighABV} />}
      {isHighABV && !isAcidic && <CardList beers={highABVBeers} />}
      {isAcidic && !isHighABV && <CardList beers={acidicBeers} />}
    </div>
  );
}

export default Main;