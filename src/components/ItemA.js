import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ItemDetail from './ItemDetail';

const SelectingArea = styled.div`
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  display: inline-block;
  background-color: ${props => props.isSelected && 'rgb(182,238,238)'};
`;

const Content = props => {
  const { isSelected, index } = props;
  const divEl = useRef(null);

  useEffect(() => {
    // 이 component가 선택 되었을 때,
    if (isSelected) {
      // content 한 개의 width
      const contentWidth = divEl.current.offsetWidth;

      // 전체 carousel의 왼쪽 좌표
      const carouselLeft = divEl.current.parentNode.clientLeft;

      // carousel의 왼쪽 좌표 + ( content의 width X content 갯수 )
      divEl.current.parentNode.scrollTo(carouselLeft + contentWidth * index, 0);
    }
  }, [isSelected, index]);

  return (
    <SelectingArea isSelected={props.isSelected} ref={divEl}>
      <ItemDetail index={props.index} />
    </SelectingArea>
  );
};

export default Content;
