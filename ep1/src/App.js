import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="appContainer">
        <input type="search" placeholder="search" />
        <div>
          <ul>
            <li>
              <img src="#" role="presentation" />
              <div>
                <strong>name</strong>
                <br />
                <strong>email</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
