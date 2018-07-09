import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GameMain from './Components/GameMain/GameMain';
import worldImg from './world.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="flag-app">
          <header
            className="title-header"
            style={{
            backgroundImage: `url(${worldImg})`
          }}>
            <h1 className="title-text">Guess The Flag</h1>
          </header>
        </div>
        <GameMain/>
      </div>
    );
  }
}

export default App;
