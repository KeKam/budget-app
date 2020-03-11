import React from 'react';
import { Circle } from 'styled-spinkit';
import { Loading as S } from './Loading.styled';

const Loading = () => {
  return (
    <S.Container>
      <Circle size='70' />
    </S.Container>
  );
};

export default Loading;
