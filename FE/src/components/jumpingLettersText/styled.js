import styled, { css, keyframes } from 'styled-components';

const Jump = keyframes`
  0%      { font-size: 19px }
  0.05%   { font-size: 19.5px }
  0.1%    { font-size: 20px }
  0.1.5%  { font-size: 20.5px }
  0.2%    { font-size: 21px }
  0.3%    { font-size: 21.5px }
  0.3%    { font-size: 22px }
`;

const JumpContainer = styled.span`
  display: flex;
  gap: 0px;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

const JumpLetter = styled.span`
  line-height: 25px;
  padding: 1px;
  width: 9px;
  :hover {
    color: gold;
    cursor: none;
    animation: ${Jump} 100s ease-in-out;
  }
`;

const Space = styled.span`
  margin-left: 8px;
`;

const S = {
  JumpContainer,
  JumpLetter,
  Space,
};

export default S;
