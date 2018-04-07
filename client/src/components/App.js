import React, { Component } from 'react';
import '../assets/styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dogImage: 'https://dog.ceo/api/img/germanshepherd/n02106662_6966.jpg'
    }
  }

  render() {
    return (
      <div className='App'>
        <header>
          <h1>The Great Dogsby</h1>
        </header>
        <section className='main-content'>
          <div>
            <img className='dog-picture' src={this.state.dogImage} />
          </div>
          <div>
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
        this.setState({
          dogImage: responseJson.message
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

} // end of component

export default App;
