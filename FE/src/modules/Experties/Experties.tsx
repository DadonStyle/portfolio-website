import FLipCardContainer from '../../components/FlipCard/FLipCardContainer';
import Glitch from '../../components/Glitch/Glitch';
import { imgArr } from './helper';
import S from './styled';

const Experties = () => (
  <>
    <S.HeaderWrapper>
      <Glitch active={false} hover={true} text={'Experties'} />
    </S.HeaderWrapper>
    <S.BodyWrapper>
      <FLipCardContainer imgArr={imgArr} />
    </S.BodyWrapper>
  </>
);

export default Experties;
