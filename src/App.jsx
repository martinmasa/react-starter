import React, { Component } from 'react';
import styled from 'styled-components';
import { Router, Link } from '@reach/router';

import GlobalStyle from './global-styles';

const Wrapper = styled.div`
  color: #353535;
  text-align: center;
`;

const Home = () => <p>This is the Home page.</p>;
const About = () => <p>This is the About page.</p>;

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

        <nav>
          <Link to="/">[Home]</Link>
          <Link to="/about">[About]</Link>
        </nav>

        <Router>
          <Home path="/" />
          <About path="/about" />
        </Router>
      </Wrapper>
    );
  }
}

export default App;
