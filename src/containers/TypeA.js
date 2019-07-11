import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

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
  scroll-behavior: ${props => props.smoothScroll && 'smooth'};
  text-align: left;
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
  width: ${props => `${props.width || '18rem'}`};
  height: ${props => `${props.height || '18rem'}`};
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  background-color: rgb(182, 238, 238);
  transform: ${props =>
    props.toBeScrollWidth > 0 && `translatex(${props.toBeScrollWidth}px)`};
  transition: ${props => props.smoothScroll && 'all 0.4s ease'};
`;

const ResetButton = styled.div`
  border: 2px solid gray;
  border-radius: 20px;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  margin: auto 2rem auto auto;
  cursor: pointer;
`;

const EndPoint = styled.div`
  width: 20px;
  height: ${props => `${props.height || '18rem'}`};
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  background-color: lightgray;
  opacity: 0;
  left: ${props => !props.right && 0};
  right: ${props => props.right && 0};
  z-index: 1;
  animation: ${props => props.isEndPoint && 'blink 0.5s linear'};
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const TypeA = props => {
  const {
    itemList,
    itemComponent,
    clickDisable,
    smoothScroll,
    overScroll,
    showResetButton,
    itemStyle,
    containerCssObject,
    listCssObject,
    itemCssObject,
    selectingAreaCssObject,
    headerCssObject,
    resetButtonCssObject,
    endPointCssObject
  } = props;

  const divEl = useRef(null);

  // 초기값 10
  if (!itemList.length) {
    for (let i = 0; i < 10; i++) {
      itemList.push({});
    }
  }

  const [selectedItemNum, setSelectedItemNum] = useState(0);

  const [toBeScrollWidth, setToBeScrollWidth] = useState(0);

  const [isEndPoint, setIsEndPoint] = useState(false);

  // Reset Button 클릭
  const onClickReset = () => {
    setSelectedItemNum(0);
  };

  // click시, 선택
  const onClickItem = num => {
    setSelectedItemNum(num);
    onMoveSelectingArea(num);
  };

  // selectingArea 움직임 여부 판별 && 움직일 width 설정
  const onMoveSelectingArea = num => {
    // carousel 끝부분 판별
    let clientWidth = divEl.current.clientWidth;
    const itemWidth = divEl.current.childNodes[2].clientWidth;
    if (itemWidth * itemList.length < clientWidth) {
      clientWidth = itemWidth * itemList.length;
    }
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
        if (overScroll) {
          setSelectedItemNum(0);
        } else {
          // 오른쪽 끝에 닿았을 때,
          onEndPoint('right');
        }
      }
    } else if (leftPress) {
      if (selectedItemNum > 0) {
        setSelectedItemNum(selectedItemNum - 1);
      } else {
        if (overScroll) {
          setSelectedItemNum(itemList.length - 1);
        } else {
          // 왼쪽 끝에 닿았을 때,
          onEndPoint('left');
        }
      }
    }

    // selectingArea 움직이기
    onMoveSelectingArea(selectedItemNum);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leftPress, rightPress]);

  return (
    <TypeContainer style={containerCssObject}>
      <div style={{ display: 'flex', ...headerCssObject }}>
        <Title>
          TYPE A <span>: Carousel </span>
        </Title>
        {showResetButton && (
          <ResetButton onClick={onClickReset} style={resetButtonCssObject}>
            맨 위로
          </ResetButton>
        )}
      </div>
      <ItemsContainer
        ref={divEl}
        smoothScroll={smoothScroll}
        style={listCssObject}
      >
        <EndPoint
          height={itemStyle && itemStyle.height}
          right={isEndPoint === 'right'}
          isEndPoint={isEndPoint}
          style={endPointCssObject}
        />
        <SelectingArea
          width={itemStyle && itemStyle.width}
          height={itemStyle && itemStyle.height}
          toBeScrollWidth={toBeScrollWidth}
          smoothScroll={smoothScroll}
          style={selectingAreaCssObject}
        />
        {itemList.map((item, key) => {
          return (
            <ItemA
              item={item}
              key={key}
              index={key}
              isSelected={selectedItemNum === key}
              itemStyle={itemStyle}
              onClickItem={clickDisable ? null : () => onClickItem(key)}
              itemCssObject={itemCssObject}
              itemComponent={itemComponent}
            />
          );
        })}
      </ItemsContainer>
    </TypeContainer>
  );
};

TypeA.propTypes = {
  itemList: PropTypes.arrayOf(Object),
  itemComponent: PropTypes.element,
  clickDisable: PropTypes.bool,
  smoothScroll: PropTypes.bool,
  overScroll: PropTypes.bool,
  showResetButton: PropTypes.bool,
  itemStyle: PropTypes.shape({
    height: PropTypes.string,
    width: PropTypes.string
  }),
  col: PropTypes.number,
  containerCssObject: PropTypes.object,
  listCssObject: PropTypes.object,
  itemCssObject: PropTypes.object,
  selectingAreaCssObject: PropTypes.object,
  headerCssObject: PropTypes.object,
  resetButtonCssObject: PropTypes.object,
  endPointCssObject: PropTypes.object
};

export default TypeA;
