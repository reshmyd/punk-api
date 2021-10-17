import './NavBar.scss';

import SearchBox from '../../component/SearchBox/SearchBox.jsx';
import FilterItem from '../../component/FilterItem/FilterItem.jsx';


const NavBar = ({handleInput, handleHighABVClick, handleAcidicClick}) => {
  return (
    <div className="nav-bar">
        <SearchBox handleInput={handleInput} />
        <FilterItem labelName="High ABV" fnOnClick={handleHighABVClick} />
        <FilterItem labelName="Acidic" fnOnClick={handleAcidicClick} />
    </div>
  );
}

export default NavBar;