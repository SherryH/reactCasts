import React, { Component } from 'react';
import './LoadingHOC.css';

//This is the HOC, input: wrappedComponent that we want to add loader to
//output: The HOC component that includes the loader

const LoadingHOC = WrappedComponent => {
  return class LoadingHOC extends Component {
    render() {
      return this.props.contacts.length === 0
        ? <div className="loader" />
        : <WrappedComponent {...this.props} />;
    }
  };
};

export default LoadingHOC;
