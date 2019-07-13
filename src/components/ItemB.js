import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import DefaultItemComponent from './ItemDetail';

const SelectingArea = styled.div`
  width: ${props => `${100 / props.col}%`};
  height: ${props => `${props.height || '18rem'}`};
  box-sizing: border-box;
  display: inline-block;
  /* will-change: background-color; */
  background-color: ${props => props.isSelected && 'rgb(182, 238, 238)'};
`;

const ItemContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ItemB = props => {
  const divEl = useRef(null);

  const {
    item,
    isSelected,
    index,
    onClickItem,
    N,
    itemStyle,
    itemCssObject,
    selectingAreaCssObject,
    itemComponent
  } = props;

  useEffect(() => {
    if (isSelected) {
      const {
        current: {
          offsetHeight: contentHeight,
          parentNode: { scrollTop, clientHeight: listHeight }
        }
      } = divEl;
      const scrollBottom = scrollTop + listHeight;

      const n = Math.floor(index / N);

      // item의 아랫부분이 전부 보이지 않을 경우?
      if (scrollBottom < contentHeight * (n + 1)) {
        divEl.current.parentNode.scrollTop =
          contentHeight * (n + 1) - listHeight;
      }
      // item의 윗부분이 전부 보이지 않을 경우
      if (scrollTop > contentHeight * n) {
        divEl.current.parentNode.scrollTop = contentHeight * n;
      }
    }
  }, [N, index, isSelected]);

  return (
    <SelectingArea
      isSelected={isSelected}
      onClick={onClickItem}
      ref={divEl}
      col={N}
      height={itemStyle && itemStyle.height}
      style={isSelected ? selectingAreaCssObject : null}
    >
      <ItemContainer style={itemCssObject}>
        {itemComponent ? (
          // TODO : index 삭제
          React.cloneElement(itemComponent, {
            index,
            ...itemComponent.props,
            ...item
          })
        ) : (
          <DefaultItemComponent index={index} />
        )}
      </ItemContainer>
    </SelectingArea>
  );
};

ItemB.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  itemStyle: PropTypes.object,
  onClickItem: PropTypes.func,
  itemCssObject: PropTypes.object,
  itemComponent: PropTypes.element,
  selectingAreaCssObject: PropTypes.object,
  N: PropTypes.number
};

export default ItemB;
