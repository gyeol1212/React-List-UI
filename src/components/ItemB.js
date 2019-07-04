import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ItemDetail from './ItemDetail';

const SelectingArea = styled.div`
  /* border: 1px solid black; */
  /* margin: 1%; */
  width: 25%;
  height: 300px;
  padding: 0.5rem;
  box-sizing: border-box;
  display: inline-block;
  background-color: ${props => props.isSelected && 'skyblue'};
`;

const Content = props => {
  const divEl = useRef(null);

  useEffect(() => {
    if (props.isSelected) {
      console.log(divEl);

      const contentHeight = divEl.current.offsetHeight;

      const scrollTop = divEl.current.parentNode.scrollTop;
      const ListHeight = divEl.current.parentNode.clientHeight;

      const scrollBottom = scrollTop + ListHeight;

      const n = Math.floor(props.index / 4);

      // item의 아랫부분이 전부 보이지 않을 경우?
      if (scrollBottom < contentHeight * (n + 1)) {
        divEl.current.parentNode.scrollTo(
          0,
          contentHeight * (n + 1) - ListHeight
        );
      }
      // item의 윗부분이 전부 보이지 않을 경우
      if (scrollTop > contentHeight * n) {
        divEl.current.parentNode.scrollTo(0, contentHeight * n);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isSelected]);

  return (
    <SelectingArea
      isSelected={props.isSelected}
      onClick={props.clickContent}
      ref={divEl}
    >
      <ItemDetail index={props.index} />
    </SelectingArea>
  );
};

export default Content;
