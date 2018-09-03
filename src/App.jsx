import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #353535;
`;

class App extends Component {
  state = {
    name: 'World'
  };

  render() {
    const { name } = this.state;

    return (
      <Wrapper>
        <h1>Hello {name}!</h1>
      </Wrapper>
    );
  }
}

export default App;
