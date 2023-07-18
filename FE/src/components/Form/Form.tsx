import { FormEvent, useRef, useState } from 'react';
import S from './styled';

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [name, setName] = useState<string | undefined>('');
  const [subject, setSubject] = useState<string | undefined>('');
  const [textArea, setTextArea] = useState<string | undefined>('');

  const handleNameChange = () => setName(nameRef.current?.value);
  const handleSubjectChange = () => setSubject(subjectRef.current?.value);
  const handleTextAreaChange = () => setTextArea(textAreaRef.current?.value);

  const getGreet = () => {
    const date = new Date();
    console.log(date.getHours);
  };

  getGreet(); // add good morning/mid day/evening/night to the body

  return (
    <S.FormContainer>
      <S.Form>
        <S.label>Name</S.label>
        <S.Input ref={nameRef} onChange={handleNameChange} defaultValue="name" />

        <S.label>Subject</S.label>
        <S.Input ref={subjectRef} onChange={handleSubjectChange} defaultValue="email" />

        <S.label>Message</S.label>
        <S.Textarea ref={textAreaRef} onChange={handleTextAreaChange} defaultValue="email" />

        <a href={`mailto:noamoni9@gmail.com?subject=${subject}&body=Hello It's ${name}, ${textArea}`}>Send Email</a>
      </S.Form>
    </S.FormContainer>
  );
};

export default Form;
