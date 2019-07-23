import styled from 'styled-components';

const ShakeXDiv = styled.div`
  animation: ${props => props.isEndPoint && 'shakeX 0.2s linear'};
  @keyframes shakeX {
    10%,
    90% {
      transform: translate3d(-0.25rem, 0, 0);
    }
    20%,
    80% {
      transform: translate3d(0.5rem, 0, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(-1rem, 0, 0);
    }
    40%,
    60% {
      transform: translate3d(1rem, 0, 0);
    }
  }
`;
const ShakeYDiv = styled.div`
  animation: ${props => props.isEndPoint && 'shakeY 0.2s linear'};
  @keyframes shakeY {
    10%,
    90% {
      transform: translate3d(0, -0.25rem, 0);
    }
    20%,
    80% {
      transform: translate3d(0, 0.5rem, 0);
    }
    30%,
    50%,
    70% {
      transform: translate3d(0, -1rem, 0);
    }
    40%,
    60% {
      transform: translate3d(0, 1rem, 0);
    }
  }
`;

export { ShakeXDiv, ShakeYDiv };
