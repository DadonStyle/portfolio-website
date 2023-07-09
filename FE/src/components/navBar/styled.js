import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Item = styled.div`
  :hover-1 {
    background: linear-gradient(#1095c1 0 0) var(--p, 0) / var(--p, 0) no-repeat;
    transition: 0.4s, background-position 0s;
  }
  :hover-1:hover {
    --p: 100%;
    color: #fff;
  }
  //https://css-tricks.com/cool-hover-effects-using-background-properties/
`;

const S = {
  Wrapper,
};

export default S;
