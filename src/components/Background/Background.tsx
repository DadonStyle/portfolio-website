import S from './styled';
import { svgs, randomId } from './helper';
import FloatComponent from './FloatComponent';
import { IBackground, isMobile } from '../../App';

const Background = ({ backgroundRef }: IBackground) => (
  <>
    <S.BackgroundImg id="backIMG" ref={backgroundRef} />
    <S.FloatContainer>
      {[...Array(isMobile ? 14 : 56).keys()].map((item) => (
        <FloatComponent
          key={Math.random()}
          backgroundRef={backgroundRef}
          svg={svgs[item] ? svgs[item] : svgs[randomId(svgs?.length)]}
        />
      ))}
    </S.FloatContainer>
  </>
);

export default Background;
