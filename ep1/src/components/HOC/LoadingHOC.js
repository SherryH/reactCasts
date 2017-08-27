import React, { Component } from 'react';
import './LoadingHOC.css';

//This is the HOC, input: wrappedComponent that we want to add loader to
//output: The HOC component that includes the loader

//use curry to take in the loadingProps and then take in the WrapperComponent

const LoadingHOC = loadingProps => WrappedComponent => {
  const isEmpty = loadingProps => {
    if (
      loadingProps === null ||
      loadingProps === undefined ||
      (loadingProps.hasOwnProperty('length') && loadingProps.length === 0) ||
      (loadingProps.constructor === 'Object' &&
        Object.keys(loadingProps).length === 0)
    ) {
      return true;
    }
    return false;
  };
  return class LoadingHOC extends Component {
    // the loadingProps may not be an array.
    // instead of checking the array length to be 0, make generic
    render() {
      return isEmpty(loadingProps)
        ? <div className="loader" />
        : <WrappedComponent {...this.props} />;
    }
  };
};

export default LoadingHOC;
