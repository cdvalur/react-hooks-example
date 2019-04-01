import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import ButtonHook from './ButtonHook';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Chandra'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
         Start Exploring React Hooks.
        </p>
      <ButtonHook/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
