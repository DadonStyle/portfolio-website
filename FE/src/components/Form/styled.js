import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: none;
`;

const label = styled.label`
display: flex;
cursor: none;
`;

const Input = styled.input`
display: flex;
cursor: none;
`;

const Textarea = styled.textarea`
display: flex;
cursor: none;
`;

const S = {
  FormContainer,
  Form,
  label,
  Input,
  Textarea,
};

export default S;

