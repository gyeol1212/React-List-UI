import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ItemA from '../components/ItemA';
import useKeyPress from '../Hooks/useKeyPress';

const TypeContainer = styled.div`
  border: 1px solid black;
  margin: 20px auto;
  padding: 30px 5px;
  border-radius: 10px;
`;

const ItemsContainer = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  margin: 20px;
  /* TODO : 넣을지, 말지 */
  scroll-behavior: ${props => props.smoothScroll && 'smooth'};
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

const TypeA = props => {
  const { clickDisable, smoothScroll, itemStyle } = props;

  const itemList = [];
  for (let i = 0; i < 20; i++) {
    itemList.push('');
  }

  const [selectedItemNum, setSelectedItemNum] = useState(0);

  // click시, 선택
  const onClickItem = num => {
    setSelectedItemNum(num);
  };

  const leftPress = useKeyPress(37);
  const rightPress = useKeyPress(39);

  useEffect(() => {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftPress, rightPress]);

  return (
    <TypeContainer>
      <Title>
        TYPE A <span>: Carousel </span>
      </Title>
      <ItemsContainer smoothScroll={smoothScroll}>
        {itemList.map((list, key) => {
          return (
            <ItemA
              content={list}
              key={key}
              index={key}
              isSelected={selectedItemNum === key}
              itemStyle={itemStyle}
              onClickItem={clickDisable ? null : () => onClickItem(key)}
            />
          );
        })}
      </ItemsContainer>
    </TypeContainer>
  );
};

export default TypeA;
