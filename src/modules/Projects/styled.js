import styled from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding: ${({ theme }) => (theme.isMobile ? "" : "0 1rem")};
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 1rem;
  padding: 1rem;
  max-width: ${({ theme }) => (theme.isMobile ? "90%" : "300px")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  position: relative;
  overflow: hidden;

  &.bouncing {
    animation: jiggle 2s ease;
  }

  &:hover {
    transform: ${({ theme }) => (theme.isMobile ? "none" : "scale(1.05)")};
  }

  @keyframes jiggle {
    0%,
    100% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(3deg);
    }
    50% {
      transform: rotate(-3deg);
    }
    75% {
      transform: rotate(3deg);
    }
  }
`;

const InnerBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: translateY(0);

  &:nth-child(2) {
    transform: translateY(100%);
  }

  &.active {
    transform: translateY(-50%);
  }
`;

const DragIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.1);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const ProjectTech = styled.span`
  font-size: 0.9rem;
  color: #555;
`;

const ProjectLink = styled.a`
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
  margin-top: 0.5rem;
  cursor: none;

  &:hover {
    text-decoration: underline;
    cursor: none;
  }
`;

const OrderControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const S = {
  HeaderWrapper,
  BodyWrapper,
  ProjectCard,
  InnerBox,
  DragIndicator,
  ProjectImage,
  ProjectDetails,
  ProjectName,
  ProjectDescription,
  ProjectTech,
  ProjectLink,
  OrderControls,
};

export default S;
