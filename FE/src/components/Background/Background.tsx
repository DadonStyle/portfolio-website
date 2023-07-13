import S from './styled';
import { svgs, keyFrames } from './helper';

const Background = () => (
  <>
    <S.FloatContainer>
      {svgs.map((item, index) => (
        <S.AnimationWrapper
          key={Math.random()}
          floatAnimation={keyFrames[index]}
        >
          {item}
        </S.AnimationWrapper>
      ))}
    </S.FloatContainer>
  </>
);

export default Background;
