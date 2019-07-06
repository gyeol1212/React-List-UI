import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ItemA from '../components/ItemA';
import useKeyPress from '../Hooks/useKeyPress';

const TypeContainer = styled.div`
  border: 1px solid black;
  margin: 20px auto;
  padding: 30px 5px;
  border-radius: 10px;
  position: relative;
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

const SelectingArea = styled.div`
  width: ${props => `${props.width || 300}px`};
  height: ${props => `${props.height || 300}px`};
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  background-color: rgb(182, 238, 238);
  transform: ${props =>
    props.toBeScrollWidth > 0 && `translatex(${props.toBeScrollWidth}px)`};
  transition: ${props => props.smoothScroll && 'all 0.4s ease'};
`;

const EndPoint = styled.div`
  width: 20px;
  height: ${props => `${props.height || 300}px`};
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  left: ${props => !props.right && 0};
  right: ${props => props.right && 0};
  z-index: 1;
  animation: ${props => props.isEndPoint && 'blink 0.5s linear'};
  @keyframes blink {
    0% {
      background-color: initial;
    }
    50% {
      background-color: lightgray;
    }
    100% {
      background-color: none;
    }
  }
`;

const TypeA = props => {
  const { clickDisable, smoothScroll, itemStyle } = props;

  const divEl = useRef(null);

  const itemList = [];
  for (let i = 0; i < 10; i++) {
    itemList.push('');
  }

  const [selectedItemNum, setSelectedItemNum] = useState(0);

  const [toBeScrollWidth, setToBeScrollWidth] = useState(0);

  const [isEndPoint, setIsEndPoint] = useState(false);

  // click시, 선택
  const onClickItem = num => {
    setSelectedItemNum(num);
    onMoveSelectingArea(num);
  };

  // selectingArea 움직임 여부 판별 && 움직일 width 설정
  const onMoveSelectingArea = num => {
    // carousel 끝부분 판별
    const clientWidth = divEl.current.clientWidth;
    const itemWidth = divEl.current.childNodes[2].clientWidth;
    const scrollWidth = clientWidth - itemWidth * (itemList.length - num);

    setToBeScrollWidth(scrollWidth);
  };

  // 끝부분 닿았을 때 여부
  const onEndPoint = p => {
    setIsEndPoint(p);
    setTimeout(() => {
      setIsEndPoint(false);
    }, 500);
  };

  const leftPress = useKeyPress(37);
  const rightPress = useKeyPress(39);

  useEffect(() => {
    if (rightPress) {
      if (selectedItemNum < itemList.length - 1) {
        setSelectedItemNum(selectedItemNum + 1);
      } else {
        // setSelectedItemNum(0);

        // 오른쪽 끝에 닿았을 때,
        onEndPoint('right');
      }
    } else if (leftPress) {
      if (selectedItemNum > 0) {
        setSelectedItemNum(selectedItemNum - 1);
      } else {
        // setSelectedItemNum(itemList.length - 1);

        // 왼쪽 끝에 닿았을 때,
        onEndPoint('left');
      }
    }

    // selectingArea 움직이기
    onMoveSelectingArea(selectedItemNum);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftPress, rightPress]);

  return (
    <TypeContainer>
      <Title>
        TYPE A <span>: Carousel </span>
      </Title>
      <ItemsContainer ref={divEl} smoothScroll={smoothScroll}>
        <EndPoint
          height={itemStyle && itemStyle.height}
          right={isEndPoint === 'right'}
          isEndPoint={isEndPoint}
        />
        <SelectingArea
          width={itemStyle && itemStyle.width}
          height={itemStyle && itemStyle.height}
          toBeScrollWidth={toBeScrollWidth}
          smoothScroll={smoothScroll}
        />
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
