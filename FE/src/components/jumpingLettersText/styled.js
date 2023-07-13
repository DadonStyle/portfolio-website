import styled, { css, keyframes } from 'styled-components';

const Jump = keyframes`
  0%      { font-size: 19px }
  0.05%   { font-size: 19.5px }
  0.1%    { font-size: 20px }
  0.15%    { font-size: 20.5px }
  0.2%    { font-size: 21px }
  0.3%    { font-size: 21.5px }
  0.3%    { font-size: 22px }
`;

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
  :hover {
    color: gold;
    cursor: none;
    animation: ${Jump} 100s;
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
