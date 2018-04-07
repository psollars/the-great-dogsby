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
            <button onClick={this.fetch}>Fetch boy, fetch!</button>
          </div>
        </section>
      </div>
    );
  }

  fetch = () => {
    alert('good boy');
  }

} // end of component

export default App;
