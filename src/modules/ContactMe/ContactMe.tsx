import { SetStateAction, useState } from 'react';
import Glitch from '../../components/Glitch/Glitch';
import S from './styled';

type TProps = {
  isVisible?: boolean;
};

const ContactMe = (props: TProps) => {
  const [name, setName] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [textArea, setTextArea] = useState<string>('');

  const handleNameChange = (e: {
    currentTarget: { value: SetStateAction<string> };
  }) => setName(e.currentTarget.value);
  const handleSubjectChange = (e: {
    currentTarget: { value: SetStateAction<string> };
  }) => setSubject(e.currentTarget.value);
  const handleTextAreaChange = (e: {
    currentTarget: { value: SetStateAction<string> };
  }) => setTextArea(e.currentTarget.value);

  return (
    <S.ContactWrapper>
      <S.HeaderWrapper>
        <Glitch text={'Contact Me'} />
      </S.HeaderWrapper>
      <S.BodyWrapper>
        <S.FormContainer>
          <S.Form isVisible={props.isVisible!}>
            <S.NameContainer>
              <S.Label>Name</S.Label>
              <S.Input onChange={handleNameChange} placeholder='name' />
            </S.NameContainer>
            <S.SubjectContainer>
              <S.Label>Subject</S.Label>
              <S.Input
                onChange={handleSubjectChange}
                placeholder='email subject'
              />
            </S.SubjectContainer>
            <S.MessageContainer>
              <S.Label>Message</S.Label>
              <S.Textarea
                onChange={handleTextAreaChange}
                placeholder='Let me know what do you think!'
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
