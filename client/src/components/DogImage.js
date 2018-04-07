import React, { Component } from 'react';

class DogImage extends Component {
  render() {
    return (
      <div className='dog-image'>
        <img src={this.props.dogImage} alt={this.props.altText} title={this.props.altText}/>
      </div>
    );
  }
}

export default DogImage;
