import styled from 'styled-components';

interface ISection {
  isVisible: Boolean;
}

const Section = styled.section<ISection>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  min-height: 100vh;
  // background-color: ${(props) => (props.isVisible ? 'red' : 'green')};
`;

const S = {
  Section,
};

export default S;
