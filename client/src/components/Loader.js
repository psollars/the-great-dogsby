import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <h2>Loading...</h2>
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    );
  }
}

export default Loader;
