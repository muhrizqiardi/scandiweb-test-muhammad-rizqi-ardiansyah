import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default class NoMatch404 extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>404 Not Found | ScandiStore</title>
        </Helmet>
        <h1>404 Not Found</h1>
        <br/>
        <Link to="/">Go back to home</Link>
      </Wrapper>
    )
  }
}
