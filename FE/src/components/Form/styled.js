import styled, { keyframes } from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  background-color: white;
  background-image: url('https://random.imagecdn.app/500/150');
  border-radius: 2rem;
  perspective: 1000px;
`;

const moveRight = keyframes`
  0.1%  { transform: translateX(0); transform: rotateZ(0deg);}
  0.2%  { transform: translateX(27rem) rotateY(20deg);  }
  25%   { transform: translateX(27rem) rotateY(20deg);}
  100%  { transform: translateX(0rem) rotateY(0deg); box-shadow: 0rem 0rem white;  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-radius: 2rem;
  background-color: black;
  cursor: none;
  gap: 3rem;
  padding: 2rem;
  transition: animation 0.8s;
  transform-style: preserve-3d;
  animation: ${moveRight} 20s ease;
  min-width: 400px;
  min-height: 400px;
`;

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
  width: 100%;
  padding-bottom: 2rem;
`;

const label = styled.label`
  display: flex;
  cursor: none;
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
`;

const Input = styled.input`
  display: flex;
  cursor: none;
  background-color: transparent;
  color: white;
  border-radius: 2rem;
  padding: 1rem;
  width: 100%;
`;

const Textarea = styled.textarea`
  display: flex;
  cursor: none;
  background-color: transparent;
  color: white;
  border-radius: 2rem;
  padding: 1rem;
  width: 100%;
  height: 200px;
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid wheat;
  border-radius: 5px;
  width: 100%;
`;

const S = {
  FormContainer,
  Form,
  NameContainer,
  SubjectContainer,
  MessageContainer,
  LinkContainer,
  label,
  Input,
  Textarea,
  Link,
};

export default S;
