import React from 'react';
import './SearchForm.scss';

const SearchForm = () => {
  return (
    <form id="search-form">
      <input type="text" name="search-input" placeholder="Search" />
      <button id="search-btn" type="button">Search</button>
    </form>
  );
};

export default SearchForm;