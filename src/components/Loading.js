import React from 'react';
import styled from 'styled-components';
import { Circle } from 'styled-spinkit';

const LoaderContainer= styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Loading = () => {
  return (
    <LoaderContainer>
      <Circle size='70' />
    </LoaderContainer>
  );
};

export default Loading;