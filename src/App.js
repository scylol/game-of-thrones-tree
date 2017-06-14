import React, { Component } from 'react';
import Header from './components/header.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

// Have a Seperate File of All the Houses and their respective persons
// Set the value of each rendered item to the House Name
//On Click, get the event.target.value
//Toggle Something in the state based on that value
//IE ShowHouseStark: false gets toggled to True
//have a conditional to check which house is set to true, then render that house from the File
