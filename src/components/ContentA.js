import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import ContentDetail from './ContentDetail';

const ContentContainer = styled.div`
  /* border: 1px solid black; */
  /* margin: 1%; */
  width: 25%;
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  display: inline-block;
  background-color: ${props => props.isSelected && 'rgb(182,238,238)'};
`;

const Content = props => {
  const divEl = useRef(null);

  useEffect(() => {
    if (props.isSelected) {
      if (props.isPressArrow > 0) {
        // console.log(divEl);
        // console.log(divEl.current.parentNode);

        // const el = divEl.current;

        // const style = window.getComputedStyle(el);

        // const margin = style.margin;
        // const res = Number(margin.substring(0, 7));
        // console.log(res);

        const width = divEl.current.offsetWidth;
        const parentLeft = divEl.current.parentNode.clientLeft;
        divEl.current.parentNode.scrollTo(
          parentLeft + width * props.num,
          // + res * props.num * 2
          0
        );
      }
    }
  }, [props.isSelected, props.isPressArrow]);

  return (
    <ContentContainer
      isSelected={props.isSelected}
      onClick={props.clickContent}
      ref={divEl}
    >
      <ContentDetail num={props.num} />
    </ContentContainer>
  );
};

export default Content;
