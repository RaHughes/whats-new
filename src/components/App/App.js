import React, { Component } from 'react';
import local from '../../data/local';
import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
import SearchForm from '../SearchForm/SearchForm.js';
import Menu from '../Menu/Menu.js';
import '../../index.css'


class App extends Component {
  constructor() {
    super();
    this.state = {
      local: null,
      technology: null,
      entertainment: null,
      science: null,
      health: null,
      currentCategory: local,
      categoryName: local
    }
    this.fetchData();
  }

  searchBar = (inputValue) => {
    const category = this.state.currentCategory.filter(article => article.description.toLowerCase().includes(inputValue) || article.headline.toLowerCase().includes(inputValue));
    if(category === [] || inputValue === '') {
      this.setState({ currentCategory: this.state.categoryName})
    } else {
      this.setState({ currentCategory: category})
    }
  }


  fetchData = () => {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(data => data.json())
    .then(data => this.setState({ local: data.local, technology: data.technology, entertainment: data.entertainment, science: data.science, health: data.health }))
    .catch(error => console.log(error))
  }

  pickNews = (category) => {
    this.setState({ currentCategory: this.state[category] });
    this.setState({ categoryName : this.state[category] });
  }

  render () {
    return (
      <main className="app">
        <header>
          <h1>Whats <span>New?</span></h1>
          <SearchForm searchBar={this.searchBar}/>
        </header>
        <aside>
          <Menu pickNews={this.pickNews}/>
        </aside>
        <NewsContainer articles={this.state.currentCategory}/>
      </main>
    );
  }
}

export default App;
