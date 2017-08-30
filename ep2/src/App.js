import React, { Component } from 'react';
import ScrollPos from './facc/ScrollPos';
import './App.css';

class App extends Component {
  state = {
    width: 0
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleEvent);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleEvent);
  }

  handleEvent = event => {
    this.setState({ width: event.srcElement.body.scrollTop });
  };

  render() {
    return (
      <div className="App">
        <div className="spacer" />
        This is Parent App
        <p> This can be inside a different app. Width: {this.state.width}</p>
        <div className="spacer" />
      </div>
    );
  }
}

export default App;
