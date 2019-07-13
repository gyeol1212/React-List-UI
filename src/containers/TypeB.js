/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ItemB from '../components/ItemB';

import useKeyPress from '../Hooks/useKeyPress';

const TypeContainer = styled.div`
  border: 1px solid black;
  margin: 1.5rem auto;
  padding: 2rem 0;
  border-radius: 10px;
  position: relative;
`;

const ItemsContainer = styled.div`
  overflow: scroll;
  margin: 1.5rem;
  height: ${props => `${props.height || '30rem'}`};
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
  width: 100%;
  height: 1.5rem;
  box-sizing: border-box;
  display: inline-block;
  position: absolute;
  background-color: lightgray;
  opacity: 0;
  left: 0;
  bottom: ${props => props.bottom && '2rem'};
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

const FlexDiv = styled.div`
  display: flex;
`;

const TypeB = props => {
  const {
    itemList,
    itemComponent,
    clickDisable,
    smoothScroll,
    overScroll,
    showResetButton,
    itemStyle,
    listStyle,
    col,
    containerCssObject,
    listCssObject,
    itemCssObject,
    selectingAreaCssObject,
    headerCssObject,
    resetButtonCssObject,
    endPointCssObject
  } = props;

  const N = col || 4;

  // 초기 값 = 20
  if (!itemList.length) {
    for (let i = 0; i < 20; i++) {
      itemList.push({});
    }
  }

  const [isEndPoint, setIsEndPoint] = useState(false);

  // 선택된 Item Number
  const [selectedItemNum, setSelectedItemNum] = useState(0);

  // Reset Button 클릭
  const onClickReset = () => {
    setSelectedItemNum(0);
  };

  // click시, 선택
  const onClickItem = num => {
    setSelectedItemNum(num);
  };

  // 끝부분 닿았을 때 여부
  const onEndPoint = p => {
    setIsEndPoint(p);
    setTimeout(() => {
      setIsEndPoint(false);
    }, 500);
  };

  const leftPress = useKeyPress(37);
  const upPress = useKeyPress(38);
  const rightPress = useKeyPress(39);
  const downPress = useKeyPress(40);

  useEffect(() => {
    if (rightPress) {
      if (selectedItemNum < itemList.length - 1) {
        setSelectedItemNum(selectedItemNum + 1);
      } else {
        if (overScroll) {
          setSelectedItemNum(0);
        } else {
          // 아래 끝에 닿았을 때,
          onEndPoint('bottom');
        }
      }
    } else if (leftPress) {
      if (selectedItemNum > 0) {
        setSelectedItemNum(selectedItemNum - 1);
      } else {
        if (overScroll) {
          setSelectedItemNum(itemList.length - 1);
        } else {
          // 위 끝에 닿았을 때,
          onEndPoint('top');
        }
      }
    } else if (downPress) {
      if (selectedItemNum < itemList.length - N) {
        setSelectedItemNum(selectedItemNum + N);
      } else {
        if (overScroll) {
          setSelectedItemNum(selectedItemNum + N - itemList.length);
        } else {
          // 아래 끝에 닿았을 때,
          onEndPoint('bottom');
        }
      }
    } else if (upPress) {
      if (selectedItemNum > N - 1) {
        setSelectedItemNum(selectedItemNum - N);
      } else {
        if (overScroll) {
          setSelectedItemNum(itemList.length + selectedItemNum - N);
        } else {
          // 위 끝에 닿았을 때,
          onEndPoint('top');
        }
      }
    }
  }, [rightPress, leftPress, downPress, upPress]);

  return (
    <TypeContainer style={containerCssObject}>
      <FlexDiv style={headerCssObject}>
        <Title>
          TYPE B <span>: List</span>
        </Title>
        {showResetButton && (
          <ResetButton onClick={onClickReset} style={resetButtonCssObject}>
            맨 위로
          </ResetButton>
        )}
      </FlexDiv>
      <ItemsContainer
        height={listStyle && listStyle.height}
        smoothScroll={smoothScroll}
        style={listCssObject}
      >
        <EndPoint
          isEndPoint={isEndPoint}
          bottom={isEndPoint === 'bottom'}
          style={endPointCssObject}
        />
        {itemList.map((item, key) => {
          return (
            <ItemB
              item={item}
              index={key}
              key={key}
              isSelected={selectedItemNum === key}
              onClickItem={clickDisable ? null : () => onClickItem(key)}
              N={N}
              itemStyle={itemStyle}
              itemCssObject={itemCssObject}
              selectingAreaCssObject={selectingAreaCssObject}
              itemComponent={itemComponent}
            />
          );
        })}
      </ItemsContainer>
    </TypeContainer>
  );
};

TypeB.propTypes = {
  itemList: PropTypes.arrayOf(Object),
  itemComponent: PropTypes.element,
  clickDisable: PropTypes.bool,
  smoothScroll: PropTypes.bool,
  overScroll: PropTypes.bool,
  showResetButton: PropTypes.bool,
  itemStyle: PropTypes.shape({
    height: PropTypes.string
  }),
  listStyle: PropTypes.shape({
    height: PropTypes.string
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

export default TypeB;
