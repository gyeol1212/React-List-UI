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

const ItemsContainer = styled.div`
  overflow: scroll;
  margin: 20px;
  height: ${props => `${props.height || 500}px`};
  display: flex;
  flex-wrap: wrap;
  scroll-behavior: ${props => props.smoothScroll && 'smooth'};
  /* will-change: scroll-position; */
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

const InputField = styled.div`
  margin-left: auto;
  margin-right: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  > input {
    font-size: 1.2rem;
    width: 40%;
    text-align: right;
    padding: 0.2rem 0.5rem;
  }
  > div {
    border: 2px solid gray;
    border-radius: 20px;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    font-weight: bold;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

const TypeB = props => {
  const { clickDisable, smoothScroll, itemStyle, listStyle, col } = props;

  const N = col || 4;

  // inputChangeHandler
  const [inputNumber, setInputNumber] = useState(0);

  const inputChangeHandler = e => {
    const { value } = e.target;
    setInputNumber(value);
  };

  //// input에 입력한 값 적용
  // 초기 값 = 20
  const initialItemList = [];
  for (let i = 0; i < 20; i++) {
    initialItemList.push('');
  }

  // itemList 설정
  const [itemList, setItemList] = useState(initialItemList);

  // click시, input에 입력된 값 적용
  const applyNumber = () => {
    let l = [];
    for (let i = 0; i < inputNumber; i++) {
      l.push('');
    }
    setItemList(l);
  };

  // 선택된 Item Number
  const [selectedItemNum, setSelectedItemNum] = useState(0);

  // click시, 선택
  const onClickItem = num => {
    setSelectedItemNum(num);
  };

  const leftPress = useKeyPress(37);
  const upPress = useKeyPress(38);
  const rightPress = useKeyPress(39);
  const downPress = useKeyPress(40);

  useEffect(() => {
    console.log(upPress);
    if (rightPress) {
      if (selectedItemNum < itemList.length - 1) {
        setSelectedItemNum(selectedItemNum + 1);
      } else {
        setSelectedItemNum(0);
      }
    } else if (leftPress) {
      if (selectedItemNum > 0) {
        setSelectedItemNum(selectedItemNum - 1);
      } else {
        setSelectedItemNum(itemList.length - 1);
      }
    } else if (downPress) {
      if (selectedItemNum < itemList.length - N) {
        setSelectedItemNum(selectedItemNum + N);
      } else {
        setSelectedItemNum(selectedItemNum + N - itemList.length);
      }
    } else if (upPress) {
      if (selectedItemNum > N - 1) {
        setSelectedItemNum(selectedItemNum - N);
      } else {
        setSelectedItemNum(itemList.length + selectedItemNum - N);
      }
    }
  }, [rightPress, leftPress, downPress, upPress]);

  return (
    <TypeContainer>
      <div style={{ display: 'flex' }}>
        <Title>
          TYPE B <span>: List</span>
        </Title>
        <InputField>
          <input
            type='number'
            placeholder='아이템 개수'
            onChange={e => inputChangeHandler(e)}
          />
          <div onClick={applyNumber}>적용</div>
        </InputField>
      </div>
      <ItemsContainer
        height={listStyle.height}
        smoothScroll={smoothScroll}
        // style={{ transform: 'translate3d(0,0,0)' }}
      >
        {itemList.map((list, key) => {
          return (
            <ItemB
              text={list}
              index={key}
              key={key}
              isSelected={selectedItemNum === key}
              onClickItem={clickDisable ? null : () => onClickItem(key)}
              N={N}
              itemStyle={itemStyle}
            />
          );
        })}
      </ItemsContainer>
    </TypeContainer>
  );
};

export default TypeB;
