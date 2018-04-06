
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="World Wide Travel, Inc" />
        <Body />
        <footer className="footer">
          <Footer className="trip" url="http://www.travelandleisure.com/travel-guide/monaco" destination="Monaco"/> 
          <Footer className="trip" url="http://www.travelandleisure.com/travel-guide/barcelona" destination="Barcelona"/>
          <Footer className="trip" url="http://www.travelandleisure.com/travel-guide/rome" destination="Rome"/>        
          <Footer className="trip" url="http://www.travelandleisure.com/travel-guide/sydney" destination="Sydney"/>
        </footer>
      </div>
    );
  }
}

export default App;
