import styled, { css, keyframes } from 'styled-components';

const JumpRowContainer = styled.span`
  display: flex;
  justify-content: ${({ theme }) => (theme.isMobile ? 'left' : 'center')};
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  text-size-adjust: none;
  padding-right: 2rem;
  padding-left: 1rem;
`;

const JumpWord = styled.span`
  line-height: 25px;
  padding: 1px;
  transition: transform 500ms;
  :hover {
    color: gold;
    transform: scale(1.2);
    cursor: ${({ theme }) => `${theme.cursor}`};
  }
`;

const S = {
  JumpRowContainer,
  JumpWord,
};

export default S;
