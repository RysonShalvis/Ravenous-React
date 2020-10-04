import React from 'react';
//import logo from '/Users/rysonshalvis/Desktop/Coding Projects/Codecademy Projects/ravenous_react/src/logo.svg';
import './App.css';
import BusinessList from './../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../components/util/yelp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this)
  }
  searchYelp(term,location,sortBy) {
    Yelp.search(term,location,sortBy).then(businesses => {
      this.setState({
        businesses: businesses
      })
    })
  }
  render() {
    
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList business={this.state.businesses} />
      </div>
    );
  }
}

export default App;
