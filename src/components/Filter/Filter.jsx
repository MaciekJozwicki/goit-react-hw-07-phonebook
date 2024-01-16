import { useDispatch } from 'react-redux';

import { filterContact } from '../../redux/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(filterContact(e.target.value));

  return (
    <label className="text-item">
      Find contacts by name
      <input
        type="text"
        name="filter"
        className="text-item"
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
