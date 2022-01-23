import './SearchBox.scss';

const SearchBox = ({handleInput}) => {
  return (
    <div className="search-box">
      <input type="text" placeholder="Type beer name" onChange={handleInput} />
    </div>
  );
}

export default SearchBox;