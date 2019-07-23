/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ItemB from '../components/ItemB';
import { ShakeYDiv } from '../components/utilComponents';

import useKeyPress from '../Hooks/useKeyPress';

const TypeContainer = styled.div`
  border: 1px solid black;
  margin: 1.5rem auto;
  padding: 2rem 0;
  border-radius: 10px;
  position: relative;
`;

const ItemsContainer = styled(ShakeYDiv)`
  overflow: scroll;
  margin: ${props => (props.focusOn ? '2rem' : '1.5rem')};
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
    focusOn,
    itemStyle,
    listStyle,
    col,
    containerCssObject,
    listCssObject,
    itemCssObject,
    selectingAreaCssObject,
    headerCssObject,
    resetButtonCssObject,
    containerClassName,
    listClassName,
    itemClassName,
    selectingAreaClassName,
    headerClassName,
    resetButtonClassName,
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
  const onEndPoint = () => {
    setIsEndPoint(true);
    setTimeout(() => {
      setIsEndPoint(false);
    }, 200);
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
          onEndPoint();
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
          onEndPoint();
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
          onEndPoint();
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
          onEndPoint();
        }
      }
    }
  }, [rightPress, leftPress, downPress, upPress]);

  return (
    <TypeContainer style={containerCssObject} className={containerClassName}>
      <FlexDiv style={headerCssObject} className={headerClassName}>
        <Title>
          TYPE B <span>: List</span>
        </Title>
        {showResetButton && (
          <ResetButton
            onClick={onClickReset}
            style={resetButtonCssObject}
            className={resetButtonClassName}>
            처음으로
          </ResetButton>
        )}
      </FlexDiv>
      <ItemsContainer
        height={listStyle && listStyle.height}
        smoothScroll={smoothScroll}
        focusOn={focusOn}
        style={listCssObject}
        className={listClassName}
        isEndPoint={isEndPoint}>
        {itemList.map((item, key) => {
          return (
            <ItemB
              item={item}
              index={key}
              key={key}
              isSelected={selectedItemNum === key}
              focusOn={focusOn}
              onClickItem={clickDisable ? null : () => onClickItem(key)}
              N={N}
              itemStyle={itemStyle}
              itemCssObject={itemCssObject}
              selectingAreaCssObject={selectingAreaCssObject}
              itemClassName={itemClassName}
              selectingAreaClassName={selectingAreaClassName}
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
  focusOn: PropTypes.bool,
  itemStyle: PropTypes.shape({
    height: PropTypes.string,
  }),
  listStyle: PropTypes.shape({
    height: PropTypes.string,
  }),
  col: PropTypes.number,
  containerCssObject: PropTypes.object,
  listCssObject: PropTypes.object,
  itemCssObject: PropTypes.object,
  selectingAreaCssObject: PropTypes.object,
  headerCssObject: PropTypes.object,
  resetButtonCssObject: PropTypes.object,
  containerClassName: PropTypes.string,
  listClassName: PropTypes.string,
  itemClassName: PropTypes.string,
  selectingAreaClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  resetButtonClassName: PropTypes.string,
};

export default TypeB;
