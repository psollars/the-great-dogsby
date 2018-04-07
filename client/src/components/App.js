import React, { Component } from 'react';
import '../assets/styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogImage: 'https://dog.ceo/api/img/germanshepherd/n02106662_6966.jpg',
      altText: 'German Shepherd'
    }
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>The Great Dogsby</h1>
        </header>
        <section className='main-content'>
          <div className='emoji-bar'>
            <span className='emoji'>&#x1f496;</span>
            <span className='emoji'>&#x1f415;</span>
            <span className='emoji'>&#x1f415;</span>
            <span className='emoji'>&#x1f415;</span>
            <span className='emoji'>&#x1f415;</span>
            <span className='emoji'>&#x1f496;</span>
          </div>
          <div>
            <img className='dog-image' src={this.state.dogImage} alt={this.state.altText} title={this.state.altText}/>
          </div>
          <div>
            <p>Look at this cute dog!</p>
            <button onClick={this.fetchNewDog}>Fetch boy, fetch!</button>
          </div>
        </section>
      </div>
    );
  }

  fetchNewDog = () => {
    return fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const newAltText = responseJson.message.split('img/')[1].split('/')[0];
        this.setState({
          dogImage: responseJson.message,
          altText: newAltText
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

} // end of component

export default App;
