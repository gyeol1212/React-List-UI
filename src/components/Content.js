import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ContentDiv = styled.div`
  border: 1px solid black;
  margin: 1%;
  width: 23%;
  height: 200px;
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
  }, [props.isSelected]);

  return (
    <ContentDiv
      isSelected={props.isSelected}
      onClick={props.clickContent}
      ref={divEl}
    >
      {props.num}
    </ContentDiv>
  );
};

export default Content;
