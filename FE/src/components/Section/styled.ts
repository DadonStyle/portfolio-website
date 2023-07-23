import styled from 'styled-components';

interface ISection {
  isVisible: Boolean;
}

const Section = styled.section<ISection>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 1.5rem;
  // background-color: ${(props) => (props.isVisible ? 'red' : 'green')};
`;

const S = {
  Section,
};

export default S;
