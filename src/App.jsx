import React, { Component } from 'react';
import styled from 'styled-components';

import GlobalStyle from './global-styles';

const Wrapper = styled.div`
  color: #353535;
  text-align: center;
`;

class App extends Component {
  state = {
    name: 'World'
  };

  render() {
    const { name } = this.state;

    return (
      <Wrapper>
        <GlobalStyle />
        <h1 data-testid="page-title">React Starter</h1>
        <p data-testid="page-intro">
          Hello {name}! Starter for a react project configured with some basic tools.
        </p>
      </Wrapper>
    );
  }
}

export default App;
