import { useRef, useState } from 'react';
import Glitch from '../../components/Glitch/Glitch';
import S from './styled';

type TProps = {
  isVisible?: boolean;
};

const ContactMe = (props: TProps) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [name, setName] = useState<string | undefined>('');
  const [subject, setSubject] = useState<string | undefined>('');
  const [textArea, setTextArea] = useState<string | undefined>('');

  const handleNameChange = () => setName(nameRef.current?.value);
  const handleSubjectChange = () => setSubject(subjectRef.current?.value);
  const handleTextAreaChange = () => setTextArea(textAreaRef.current?.value);

  return (
    <S.ContactWrapper>
      <S.HeaderWrapper>
        <Glitch text={'Contact Me'} />
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.FormContainer>
          <S.Form isVisible={props.isVisible!}>
            <S.NameContainer>
              <S.label>Name</S.label>
              <S.Input
                ref={nameRef}
                onChange={handleNameChange}
                placeholder="name"
              />
            </S.NameContainer>
            <S.SubjectContainer>
              <S.label>Subject</S.label>
              <S.Input
                ref={subjectRef}
                onChange={handleSubjectChange}
                placeholder="email subject"
              />
            </S.SubjectContainer>
            <S.MessageContainer>
              <S.label>Message</S.label>
              <S.Textarea
                ref={textAreaRef}
                onChange={handleTextAreaChange}
                placeholder="Let me know what do you think!"
              />
            </S.MessageContainer>
            <S.LinkContainer>
              <S.Link
                href={`mailto:noamoni9@gmail.com?subject=${subject}&body=Hello It's ${name}, ${textArea}`}
              >
                Send Email
              </S.Link>
            </S.LinkContainer>
          </S.Form>
        </S.FormContainer>
      </S.BodyWrapper>
    </S.ContactWrapper>
  );
};

export default ContactMe;
