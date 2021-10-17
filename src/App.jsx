import './App.scss';
import {useState} from 'react';
import Logo from './assets/brewdog_white.png';
import NavBar from './container/NavBar/NavBar.jsx';
import Main from './container/Main/Main.jsx';


const App = () => {
  
  const[beers, setBeers] = useState([]);

  const getBeers = () => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => response.json())
      .then(jsonResponse => setBeers(jsonResponse))
      .catch(err => console.log(err));
  }

  getBeers();

  const [searchTerm, setSearchTerm] = useState('');
  const [highABV, setHighABV] = useState(false);
  const [acidic, setAcidic] = useState(false);

  const handleInput = e => {
    const searchInput = e.target.value.toLowerCase();
    setSearchTerm(searchInput);
  }

  const handleHighABVClick = e => e.target.checked ? setHighABV(true) : setHighABV(false);
  const handleAcidicClick = e => e.target.checked ? setAcidic(true) : setAcidic(false);

  const filteredBeers = beers.filter(elem => elem.name.toLowerCase().includes(searchTerm) || elem.tagline.toLowerCase().includes(searchTerm) || elem.description.toLowerCase().includes(searchTerm));
  const highABVBeers = beers.filter(elem => elem.abv > 6);
  const acidicBeers = beers.filter(elem => elem.ph < 4);
  const acidicAndHighABV = beers.filter(elem => elem.ph < 4 && elem.abv > 6);


  return (
    <div className="App">
      <header>
        <img src={Logo} alt="Brewdog Logo" />
      </header>
      <main>
        <NavBar handleInput={handleInput} handleHighABVClick={handleHighABVClick} handleAcidicClick={handleAcidicClick} />
        <Main allBeers={beers} filteredBeers={filteredBeers} acidicBeers={acidicBeers} highABVBeers={highABVBeers} acidicAndHighABV={acidicAndHighABV} isHighABV={highABV} isAcidic={acidic} />
      </main>
    </div>
  );
}

export default App;
