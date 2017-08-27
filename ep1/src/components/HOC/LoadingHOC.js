import React, { Component } from 'react';
import './LoadingHOC.css';

//This is the HOC, input: wrappedComponent that we want to add loader to
//output: The HOC component that includes the loader

//use curry to take in the loadingProps and then take in the WrapperComponent

const LoadingHOC = loadingProps => WrappedComponent => {
  return class LoadingHOC extends Component {
    render() {
      return this.props[loadingProps].length === 0
        ? <div className="loader" />
        : <WrappedComponent {...this.props} />;
    }
  };
};

export default LoadingHOC;
