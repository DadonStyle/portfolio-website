import styled, { css, keyframes } from 'styled-components';

const JumpRowContainer = styled.span`
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 8px;
  text-size-adjust: none;
`;

const JumpWord = styled.span`
  line-height: 25px;
  padding: 1px;
  transition: transform 500ms;
  :hover {
    color: gold;
    transform: scale(1.2);
    cursor: none;
  }
`;

const S = {
  JumpRowContainer,
  JumpWord,
};

export default S;
