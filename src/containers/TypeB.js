/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemB from '../components/ItemB';

import useKeyPress from '../Hooks/useKeyPress';

const TypeContainer = styled.div`
  border: 1px solid black;
  margin: 20px 100px;
  padding: 30px 0;
  border-radius: 10px;
`;

const ContentsContainer = styled.div`
  overflow: scroll;
  margin: 20px;
  height: 600px;
`;

const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 200;
  text-align: left;
  padding-left: 3rem;
  > span {
    font-size: 1.8rem;
    margin-left: 0.5rem;
  }
`;

const TypeA = () => {
  const [number, changeNumber] = useState(0);

  const initialList = [];
  for (let i = 0; i < 20; i++) {
    initialList.push('');
  }

  const [lists, changeListCount] = useState(initialList);

  const [selectedNum, changeSelectedNum] = useState(0);

  const [isPlus, setIsPlus] = useState(true);

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
      setIsPlus(true);
    }
    if (leftPress) {
      if (selectedNum > 0) {
        changeSelectedNum(selectedNum - 1);
      } else {
        changeSelectedNum(lists.length - 1);
      }
      setIsPlus(false);
    }
    if (downPress) {
      if (selectedNum < lists.length - 5) {
        changeSelectedNum(selectedNum + 4);
      } else {
        changeSelectedNum(selectedNum + 4 - lists.length);
      }
      setIsPlus(true);
    }
    if (upPress) {
      if (selectedNum > 3) {
        changeSelectedNum(selectedNum - 4);
      } else {
        changeSelectedNum(lists.length + selectedNum - 4);
      }
      setIsPlus(false);
    }
  }, [upPress, downPress, leftPress, rightPress]);

  return (
    <TypeContainer>
      <Title>
        TYPE B <span>: List</span>
      </Title>
      <input type='number' onChange={e => inputChangeHandler(e)} />
      <button onClick={applyNumber}>적용</button>
      <ContentsContainer>
        {lists.map((list, key) => {
          return (
            <ItemB
              text={list}
              num={key}
              isSelected={selectedNum === key}
              clickContent={() => clickContent(key)}
              isPlus={isPlus}
            />
          );
        })}
      </ContentsContainer>
    </TypeContainer>
  );
};

export default TypeA;
