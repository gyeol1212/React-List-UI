import React, { useState } from 'react';

import './App.css';

import styled from 'styled-components';

import ListUI from './ListUI';
import DefaultItemComponent from './components/ItemDetail';

const Container = styled.div`
  text-align: center;
  margin: 50px 100px;
  @media (max-width: 960px) {
    margin: 50px 20px;
  }
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
  const [type, setType] = useState(true);

  const selectType = isA => {
    setType(isA);
  };
  return (
    <Container>
      <Title>List UI</Title>
      <Button onClick={() => selectType(true)}>TYPE A</Button>
      <Button onClick={() => selectType(false)}>TYPE B</Button>
      <ListUI
        type={type ? 'A' : 'B'}
        //////////
        // 공통
        itemList={
          [
            // { name: 'gyeol', age: 23 }
            // { name: 'gyeol', age: 23 },
            // { name: 'gyeol', age: 23 },
            // { name: 'gyeol', age: 23 },
            // { name: 'gyeol', age: 23 }
          ]
        }
        itemComponent={<DefaultItemComponent />}
        clickDisable={false} // Default : false
        smoothScroll={true} // Default : false
        overScroll={false} // Default : false
        showResetButton={true} // Default : false
        focusOn={true} // Default : false
        ///////////
        // TypeA
        // itemStyle={{
        //   height: '18rem',
        //   width: '18rem'
        // }}
        ////////////
        // TypeB
        // itemStyle={{ height: '18rem' }}
        // listStyle={{ height: '30rem' }}
        // col={4} // Default : 4
        ///////////////////

        // CSS Customizing
        // containerCssObject={{}}
        // listCssObject={{}}
        // itemCssObject={{}}
        // selectingAreaCssObject={{}}
        // headerCssObject={{}}
        // resetButtonCssObject={{}}

        // className Customizing
        // containerClassName=''
        // listClassName=''
        // itemClassName=''
        // selectingAreaClassName=''
        // headerClassName=''
        // resetButtonClassName=''
      />
    </Container>
  );
}

export default App;
