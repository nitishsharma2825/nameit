import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
  state = { query: '', suggestedNames: [] };

  onChangeHandler = (newTerm) => {
    const names = newTerm ? name(newTerm) : [];
    this.setState({ query: newTerm, suggestedNames: names });
  };
  render() {
    return (
      <div className='App'>
        <Header term={this.state.query} />
        <SearchBar onChange={this.onChangeHandler} />
        <ResultsContainer results={this.state.suggestedNames} />
      </div>
    );
  }
}
export default App;
