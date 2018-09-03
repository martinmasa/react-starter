import React, { Component } from 'react';

class App extends Component {
  state = {
    name: 'World'
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>Hello {name}!</h1>
      </div>
    );
  }
}

export default App;
