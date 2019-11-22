import React, { Component }from 'react';
import './SearchForm.scss';

class SearchForm extends Component {
  constructor() {
    super()
    }

    search(event) {
      const inputValue  = event.target.parentNode.firstChild.value.toLowerCase();
      this.props.searchBar(inputValue)
      event.target.parentNode.firstChild.value = ''
    }

    render() {
  return (
    <form id="search-form">
      <input type="text" name="search-input" placeholder="Search" />
      <button id="search-btn" type="button" onClick={event => this.search(event)}>Search Now</button>
    </form>
    );
  }
}

export default SearchForm;