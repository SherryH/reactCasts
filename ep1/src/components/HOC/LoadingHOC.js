import React, { Component } from 'react';
import './LoadingHOC.css';

//This is the HOC, input: wrappedComponent that we want to add loader to
//output: The HOC component that includes the loader

//use curry to take in the loadingProps and then take in the WrapperComponent

const LoadingHOC = loadingProps => WrappedComponent => {
  const isEmpty = loadingProps =>
    loadingProps === null ||
    loadingProps === undefined ||
    (loadingProps.hasOwnProperty('length') && loadingProps.length === 0) ||
    (loadingProps.constructor === 'Object' &&
      Object.keys(loadingProps).length === 0);
  return class LoadingHOC extends Component {
    // the loadingProps may not be an array.
    // instead of checking the array length to be 0, make generic

    //called when component was initially mounted
    componentDidMount() {
      this.loadingStart = Date.now();
    }

    componentWillUpdate() {
      this.loadingEnd = Date.now();
    }
    render() {
      const myProps = {
        loadingTime: (this.loadingEnd - this.loadingStart).toFixed(2)
      };
      return isEmpty(loadingProps)
        ? <div className="loader" />
        : <WrappedComponent {...this.props} {...myProps} />;
    }
  };
};

export default LoadingHOC;
