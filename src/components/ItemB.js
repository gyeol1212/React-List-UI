import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ItemDetail from './ItemDetail';

const SelectingArea = styled.div`
  width: ${props => `${100 / props.col}%`};
  height: ${props => `${props.height || '300px'}`};
  box-sizing: border-box;
  display: inline-block;
  /* will-change: background-color; */
  background-color: ${props => props.isSelected && 'skyblue'};
`;

const Content = props => {
  const divEl = useRef(null);

  const { isSelected, index, onClickItem, N, itemStyle } = props;

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
        divEl.current.parentNode.scrollTo(
          0,
          contentHeight * (n + 1) - listHeight
        );
      }
      // item의 윗부분이 전부 보이지 않을 경우
      if (scrollTop > contentHeight * n) {
        divEl.current.parentNode.scrollTo(0, contentHeight * n);
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
      // style={{ transform: 'translate3d(0,0,0)' }}
    >
      <ItemDetail index={index} />
    </SelectingArea>
  );
};

export default Content;
