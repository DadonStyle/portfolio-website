import Form from '../../components/Form/Form';
import Glitch from '../../components/Glitch/Glitch';
import S from './styled';

const ContactMe = () => (
  <>
    <S.HeaderWrapper>
      <Glitch active={false} hover={true} text={'Contact Me'} />
    </S.HeaderWrapper>
    <S.BodyWrapper>
      <Form />
    </S.BodyWrapper>
  </>
);

export default ContactMe;
