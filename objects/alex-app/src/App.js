import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js'
import LL from './Components/LinkedList.js'
import FIFO from './Components/FIFO.js'
import LIFO from './Components/LIFO.js'

class App extends Component {

  constructor(){
    super()
    this.state = {
      viewState: "TBD"
    }
  } 

handelClick = (e) => {
    console.log("clicked " + e)
    if (e === "LL"){
      this.setState({viewState: "LL"})
    } else if (e === "FIFO"){
      this.setState ({viewState: "FIFO"})
    } else if (e === "LIFO"){
      this.setState ({viewState: "LIFO"})
    }
  }


  render(){
    return (
      <div className="App">

        <h1>Java Algorithms</h1>
        <NavBar onClick = {(e) => this.handelClick(e)} />

        {this.state.viewState === 'LL' && <LL />}
        {this.state.viewState === 'FIFO' && <FIFO />}
        {this.state.viewState === 'LIFO' && <LIFO />}
        

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
