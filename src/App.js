import React, { useState } from 'react';
import './App.css';

import styled from 'styled-components';

import TypeA from './containers/TypeA';
import TypeB from './containers/TypeB';

const Container = styled.div`
  text-align: center;
  margin: auto 100px;
`;

function App() {
  const [type, setType] = useState(null);

  const selectType = isA => {
    setType(isA);
  };
  return (
    <Container>
      <h1>List UI</h1>
      <button onClick={() => selectType(true)}>TYPE A</button>
      <button onClick={() => selectType(false)}>TYPE B</button>
      {type ? <TypeA /> : type === false ? <TypeB /> : null}
    </Container>
  );
}

export default App;
