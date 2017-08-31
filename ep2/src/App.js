import React, { Component } from 'react';
import ScrollPos from './facc/ScrollPos';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        This is the Parent App
        <ScrollPos>
          {width => (
            <div className="round">
              Parent:Here, the shape and style of what is passed in is
              controlled by Parent
              {width}
            </div>
          )}
        </ScrollPos>
      </div>
    );
  }
}

export default App;
