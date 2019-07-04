import React from 'react';
import styled from 'styled-components';

const ContentDiv = styled.div`
  height: 95%;
  margin: 1rem;
`;

const Header = styled.div`
  height: 70%;
  background-color: rgb(214, 215, 214);
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;

const Title = styled(Header)`
  height: 10%;
  margin: 5% 0;
`;
const Subtitle = styled(Header)`
  height: 10%;
  width: 60%;
`;

const ContentDetail = props => {
  return (
    <ContentDiv>
      <Header>
        {' '}
        {/* <img
          src='https://picsum.photos/400/400'
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          alt='img'
        /> */}
        {props.index}
      </Header>
      <Title />
      <Subtitle />
    </ContentDiv>
  );
};

export default ContentDetail;
