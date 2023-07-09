import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const Sweep = keyframes`
  0%    { opacity: 0.5; transform: translateX(-20px) }
  100%  { opacity: 1; transform: translateX(0) }
`;

const openAnimation = keyframes`
  0%    { opacity: 0 }
  100%  { opacity: 1 }
`;

const closeAnimation = keyframes`
  0%    { opacity: 1 }
  100%  { opacity: 0.5 }
`;

const DetailsAnimation = css`
  animation: ${Sweep} 1.2s ease-in-out;
`;

const OpenAnimation = css`
  animation: ${openAnimation} 0.3s ease-in-out;
`;

const CloseAnimation = css`
  animation: ${closeAnimation} 0.3s ease-in-out;
`;

const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Details = styled.details`
  ${({ open }) => (open ? OpenAnimation : CloseAnimation)}
  width: 100%;
  ${DetailsAnimation}
`;

const DetailsSummary = styled.summary`
  /* background-color: ${dgr ? 'red' : 'blue'}; */
`;

const S = {
  DetailsWrapper,
  Details,
  DetailsSummary,
};
export default S;
