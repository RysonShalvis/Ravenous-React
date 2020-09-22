import React from 'react';
import logo from '/Users/rysonshalvis/Desktop/Coding Projects/Codecademy Projects/ravenous_react/src/logo.svg';
import './App.css';
import Business from './../Business/Business';
import BusinessList from './../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
