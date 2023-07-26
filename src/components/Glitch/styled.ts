import styled, { css, keyframes } from 'styled-components';

const glitch = keyframes`
  0% {
    transform: translate(0)
  }
  20% {
    transform: translate(-2px, 2px)
  }
  40% {
    transform: translate(-2px, -2px)
  }
  60% {
    transform: translate(2px, 2px)
  }
  80% {
    transform: translate(2px, -2px)
  }
  100% {
    transform: translate(0)
  }
`;

const animationHover = css`
  &:after {
    animation: ${glitch} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both
      infinite;
  }
`;

const GlitchContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

interface IStyledGlitch {
  text: string;
  randomColor: string;
  fontSize?: string;
  rotateZ?: string;
  isNoam?: boolean;
  isHey?: boolean;
}

const StyledGlitch = styled.span<IStyledGlitch>`
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  font-size: ${(props) =>
    props?.fontSize && !props.isHey && !props.theme.isMobile
      ? `${props.fontSize}`
      : '4rem'};
  line-height: 1;
  transform: ${({ rotateZ }) => `rotateZ(${rotateZ})`};
  perspective: 1000px;
  transform-style: preserve-3d;
  user-select: none;
  text-align: center;
  ${({ isNoam }) => (isNoam ? animationHover : '')};
  color: ${(props) =>
    props.randomColor && props.isNoam ? props.randomColor : 'white'};
  &:before,
  &:after {
    display: flex;
    justify-content: center;
    align-items: center;
    content: '${({ text }) => text}';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  &:after {
    z-index: 3;
  }
  &:before {
    z-index: 2;
  }
  :hover {
    ${animationHover}
    color: ${({ randomColor }) => randomColor ?? 'red'}
  }
`;

const S = {
  GlitchContainer,
  StyledGlitch,
};

export default S;
