import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import ItemDetail from './ItemDetail';

const SelectingArea = styled.div`
  /* border: 1px solid black; */
  margin: 1%;
  width: 23%;
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
      if (props.isPlus) {
        divEl.current.scrollIntoView(false);
      } else {
        divEl.current.scrollIntoView(true);
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
      <ItemDetail index={props.num} />
    </SelectingArea>
  );
};

export default Content;
