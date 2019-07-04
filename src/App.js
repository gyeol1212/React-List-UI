import React, { useState } from 'react';
import './App.css';

import styled from 'styled-components';

import TypeA from './containers/TypeA';
import TypeB from './containers/TypeB';

const Container = styled.div`
  text-align: center;
  margin: 50px 100px;
`;

const Title = styled.div`
  font-size: 5rem;
  font-weight: 200;
  letter-spacing: 15px;
`;

const Button = styled.div`
  font-weight: 300;
  font-size: 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  padding: 1rem 2rem;
  margin: 2rem 1rem;
`;

function App() {
  const [type, setType] = useState(false);

  const selectType = isA => {
    setType(isA);
  };
  return (
    <Container>
      <Title>List UI</Title>
      <Button onClick={() => selectType(true)}>TYPE A</Button>
      <Button onClick={() => selectType(false)}>TYPE B</Button>
      {type ? (
        <TypeA
          itemStyle={{
            width: 300,
            height: 300
          }}
        />
      ) : (
        <TypeB
          col={4}
          listStyle={{ height: 500 }}
          itemStyle={{ height: 300 }}
        />
      )}
    </Container>
  );
}

export default App;
