import React from 'react';
import styled from 'styled-components';

const ContentDiv = styled.div`
  height: 90%;
  margin: 1rem;
`;

const Header = styled.div`
  height: 60%;
  background-color: rgb(214, 215, 214);
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

const Title = styled(Header)`
  height: 10%;
  margin: 10px 0;
`;
const Subtitle = styled(Header)`
  height: 10%;
  width: 60%;
`;

const ContentDetail = props => {
  return (
    <ContentDiv>
      <Header> {props.index}</Header>
      <Title />
      <Subtitle />
    </ContentDiv>
  );
};

export default ContentDetail;
