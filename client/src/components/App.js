import React, { Component } from 'react';
import Loader from './Loader';
import DogImage from './DogImage';

import '../assets/styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogImage: "",
      altText: 'German Shepherd',
      isLoading: false
    }
  }

  componentDidMount() {
    this.fetchNewDog();
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>The Great Dogsby</h1>
        </header>
        <section className='main-content'>
          <div className='emoji-bar'>
            <span className='emoji' role='img' aria-labelledby='jsx-a11y/accessible-emoji'>&#x1f496;</span>
            <span className='emoji' role='img' aria-labelledby='jsx-a11y/accessible-emoji'>&#x1f415;</span>
            <span className='emoji' role='img' aria-labelledby='jsx-a11y/accessible-emoji'>&#x1f415;</span>
            <span className='emoji' role='img' aria-labelledby='jsx-a11y/accessible-emoji'>&#x1f415;</span>
            <span className='emoji' role='img' aria-labelledby='jsx-a11y/accessible-emoji'>&#x1f415;</span>
            <span className='emoji' role='img' aria-labelledby='jsx-a11y/accessible-emoji'>&#x1f496;</span>
          </div>
          <section className='dynamic-content'>
            { this.state.isLoading ?
              <Loader /> :
              <DogImage dogImage={this.state.dogImage} altText={this.state.altText} />
            }
          </section>
          <div>
            <p>Look at this cute dog!</p>
            <button className='fetch-button' onClick={this.handleClick}>Another Dog, Please!</button>
          </div>
        </section>
      </div>
    );
  }

  handleClick = () => {
    this.fetchNewDog();
  }

  fetchNewDog = () => {
    this.setState({
      isLoading: true
    });
    return fetch('https://dog.ceo/api/breed/bullterrier/staffordshire/images/random')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const newAltText = "dog";//responseJson.message.split('breeds/')[1].split('/')[0];
        this.setState({
          dogImage: responseJson.message,
          altText: newAltText,
          isLoading: false
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

} // end of component

export default App;
