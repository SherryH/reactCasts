import React, { Component, PropTypes } from 'react';
import '../App.css';

class ScrollPos extends Component {
  static PropTypes = {
    children: PropTypes.func.isRequired
  };

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
        This is Child App
        <p> Child:This can be inside a different app. Width: </p>
        {this.props.children(this.state.width)}
        <div className="spacer" />
      </div>
    );
  }
}

export default ScrollPos;
