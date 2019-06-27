import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Content from '../components/Content';
import useKeyPress from '../Hooks/useKeyPress';

const TypeContainer = styled.div`
  border: 1px solid black;
  margin: 0 auto;
`;

const ContentsContainer = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  margin: 20px;
`;

const TypeA = () => {
  const [number, changeNumber] = useState(0);

  const initialList = [];
  for (let i = 0; i < 20; i++) {
    initialList.push('');
  }

  const [lists, changeListCount] = useState(initialList);

  const [selectedNum, changeSelectedNum] = useState(0);

  const inputChangeHandler = e => {
    const { value } = e.target;
    changeNumber(value);
  };

  const applyNumber = () => {
    let l = [];
    for (let i = 0; i < number; i++) {
      l.push('');
    }
    changeListCount(l);
  };

  const clickContent = num => {
    changeSelectedNum(num);
  };

  const upPress = useKeyPress('ArrowUp');
  const downPress = useKeyPress('ArrowDown');
  const leftPress = useKeyPress('ArrowLeft');
  const rightPress = useKeyPress('ArrowRight');

  useEffect(() => {
    if (rightPress) {
      if (selectedNum < lists.length - 1) {
        changeSelectedNum(selectedNum + 1);
      } else {
        changeSelectedNum(0);
      }
    }
    if (leftPress) {
      if (selectedNum > 0) {
        changeSelectedNum(selectedNum - 1);
      } else {
        changeSelectedNum(lists.length - 1);
      }
    }
    if (downPress) {
      if (selectedNum < lists.length - 5) {
        changeSelectedNum(selectedNum + 4);
      } else {
        changeSelectedNum(selectedNum + 4 - lists.length);
      }
    }
    if (upPress) {
      if (selectedNum > 3) {
        changeSelectedNum(selectedNum - 4);
      } else {
        changeSelectedNum(lists.length + selectedNum - 4);
      }
    }
  }, [upPress, downPress, leftPress, rightPress]);

  return (
    <TypeContainer>
      <h1>TYPE A</h1>
      <input type='number' onChange={e => inputChangeHandler(e)} />
      <button onClick={applyNumber}>적용</button>
      <ContentsContainer>
        {lists.map((list, key) => {
          return (
            <Content
              text={list}
              num={key}
              isSelected={selectedNum === key}
              clickContent={() => clickContent(key)}
            />
          );
        })}
      </ContentsContainer>
    </TypeContainer>
  );
};

export default TypeA;
