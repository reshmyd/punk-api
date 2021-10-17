import './FilterItem.scss';

const FilterItem = ({labelName, fnOnClick}) => {
  return(
    <div className="filter-item">
      <label>{labelName}</label>
      <input type="checkbox" onClick={fnOnClick} />
    </div>
  );
}

export default FilterItem;