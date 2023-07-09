import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import S from './styled';

const Glitch = ({ active, hover, text }) => {
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  console.log(randomColor);
  return (
    <S.GlitchContainer>
      <S.StyledGlitch
        active={active}
        hover={hover}
        text={text}
        randomColor={randomColor}
      >
        {text}
      </S.StyledGlitch>
    </S.GlitchContainer>
  );
};

export default Glitch;
