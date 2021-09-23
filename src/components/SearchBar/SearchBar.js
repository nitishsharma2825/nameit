import React from 'react';
import './SearchBar.css';
const SearchBar = (props) => {
  return (
    <div className='search-container'>
      <input
        placeholder='Enter Keywords'
        className='search-input'
        type='text'
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
