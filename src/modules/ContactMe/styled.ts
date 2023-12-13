import styled from 'styled-components';

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  gap: 2rem;
  flex-direction: column;
  width: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: center;
  align-items: center;
  z-index: 4;
  width: 100%;
  max-width: ${({ theme }) => (theme.isMobile ? '' : '600px')};
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  /* background: url(https://res.cloudinary.com/dgkl4mfhe/image/upload/v1689861026/IMG-8950_xpcuf8.jpg); */
  /* background-repeat: no-repeat;
  background-size: 100% 100%; */
  border-radius: ${({ theme }) => (theme.isMobile ? '' : '20px')};
  /* perspective: 1000px; */
  width: 100%;
  max-height: ${({ theme }) => (theme.isMobile ? '700px' : '800px')};
`;

// const moveRight = keyframes`
//   0.1%  { transform: translateX(0) rotateY(0deg); box-shadow: 0rem 0rem rgba(0, 0, 0);}
//   20%  { transform: translateX(32rem) rotateY(20deg); box-shadow: 0rem 0rem rgba(0, 0, 0); }
//   70%   { transform: translateX(32rem) rotateY(20deg); box-shadow: 0.1rem 0.1rem rgba(0, 0, 0); }
//   100%  { transform: translateX(0rem) rotateY(0deg); box-shadow: -0.2rem 0.2rem rgba(0, 0, 0);  }
// `;

interface IForm {
  isVisible: boolean;
}

const Form = styled.form<IForm>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid white; */
  border-radius: ${({ theme }) => (theme.isMobile ? '' : '20px')};
  background: radial-gradient(
    circle at 24.1% 68.8%,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 99.4%
  );
  cursor: ${({ theme }) => `${theme.cursor}`};
  gap: 3rem;
  padding: 2rem;
  min-height: 400px;
  box-shadow: -0.2rem 0.2rem 0.2rem 0rem black;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
`;
/*
  ^
  transition: animation 0.8s;
  transform-style: preserve-3d;
  animation: ${(props) => (props.isVisible ? moveRight : '')} 6s ease;
  animation-delay: 1s;
  */

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2rem;
`;

const SubjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin-bottom: 2rem;
  border: 2px solid white;
  border-radius: 20px;
`;

const Input = styled.input`
  all: none;
  display: flex;
  cursor: ${({ theme }) => `${theme.cursor}`};
  background-color: transparent;
  color: white;
  border-radius: 20px;
  padding: 1rem;
  width: 100%;
  border: 2px solid white;
  box-sizing: border-box;
  :hover {
    border: 2px dotted white;
  }
`;

const Label = styled.label`
  display: flex;
  cursor: ${({ theme }) => `${theme.cursor}`};
  font-size: 2rem;
  font-weight: 700;
  box-sizing: border-box;
  width: 100%;
  color: rgba(255, 255, 255, 1);
  :hover {
    text-decoration: lavenderblush wavy underline;
  }
`;

const Textarea = styled.textarea`
  display: flex;
  cursor: ${({ theme }) => `${theme.cursor}`};
  background-color: transparent;
  color: white;
  border-radius: 20px;
  padding: 1rem;
  width: 100%;
  height: 200px;
  border: 2px solid white;
  box-sizing: border-box;
  :hover {
    border: 2px dotted white;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  border-radius: 20px;
  padding: 1rem;
  color: white;
  z-index: 3;
  cursor: ${({ theme }) => `${theme.cursor}`};
  opacity: 1;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: rgba(255, 255, 255, 1);
    transition: opacity 0.3s ease-in-out;
  }
`;

const S = {
  ContactWrapper,
  HeaderWrapper,
  BodyWrapper,
  FormContainer,
  Form,
  NameContainer,
  SubjectContainer,
  MessageContainer,
  LinkContainer,
  Label,
  Input,
  Textarea,
  Link,
};

export default S;
