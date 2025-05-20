import S from "./styled";
import Glitch from "../../components/Glitch/Glitch";

type TProps = {
  isVisible?: boolean;
};

const FirstPage = (props: TProps) => (
  <S.Wrapper isVisible={props.isVisible!}>
    <S.TitleWrapper>
      <S.GlitchWrapper isGap={true}>
        {"Hey, I am Noam".split(" ").map((item) => (
          <Glitch
            key={Math.random()}
            text={item}
            isRandomFont={true}
            isRandomRotateZ={true}
            isNoam={item === "Noam"}
          />
        ))}
      </S.GlitchWrapper>
      <S.GlitchWrapper>
        {"Web Developer".split(" ").map((item) => (
          <Glitch
            key={Math.random()}
            text={item}
            isRandomFont={true}
            isRandomRotateZ={true}
          />
        ))}
      </S.GlitchWrapper>
    </S.TitleWrapper>
    <S.TextWrapper>
      <Glitch
        text={"Interact and explore"}
        isRandomFont={true}
        isRandomRotateZ={true}
      />
    </S.TextWrapper>
  </S.Wrapper>
);
export default FirstPage;
