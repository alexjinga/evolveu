import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CoolIcons from './Components/CoolIcons'
import MathComp from './Components/MathComp'
import PhotoPage from'./Components/PhotoPage.js'
import AccountComp from './Components/AccountComp.js'
import AccountsComp from './Components/AccountsComp.js'
import CitiesComp from './Components/CitiesComp.js'

class App extends Component {

  constructor(){
    super()
    this.state = {
      viewState: "TBD"
    }
  }

  handelClick = (e) => {
    console.log("clicked " + e)
    if (e === "Math"){
      this.setState({viewState: "Math"})
    } else if (e === "Phts"){
      this.setState ({viewState: "Phts"})
    } else if (e === "account"){
      this.setState ({viewState: "account"})
    } else if (e === "accounts"){
      this.setState ({viewState: "accounts"})
    } else if (e === "cities"){
      this.setState ({viewState: "cities"})
    }

  }


  render() {
    return (
      <div className="App">
      
          <h1>Hello World</h1>
          <CoolIcons onClick = {(e) => this.handelClick(e)} />

          {this.state.viewState === 'Math' && <MathComp />}
          {this.state.viewState === 'Phts' && <PhotoPage />}
          {this.state.viewState === 'account' && <AccountComp id = "0" accountName="Checking Account" accountBalance="25" />}
          {this.state.viewState === 'accounts' && <AccountsComp />}
          {this.state.viewState === 'cities' && <CitiesComp />}

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
    );
  }
}

export default App;
