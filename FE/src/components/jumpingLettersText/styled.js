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
  transition-timing-function: cubic-bezier(0.75, -3, 0.25, 4);
  :hover {
    color: gold;
    transform: scale(1.1);
    cursor: none;
    /* animation: ${Jump} 100s; */
  }
`;

const Space = styled.span`
  margin-left: 8px;
`;

const ParagraphContainer = styled.div`
  width: 100%;
`;

const S = {
  JumpRowContainer,
  JumpWord,
  Space,
  ParagraphContainer,
};

export default S;
