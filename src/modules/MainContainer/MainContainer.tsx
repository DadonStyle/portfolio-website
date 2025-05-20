import { useState } from "react";
import S from "./styled";
import Section from "../../components/Section/Section";
import { componentsArr, IComponentsObj } from "./helper";
import NavComponent from "../../components/NavComponent/NavComponent";
import { IBackground } from "../../App";
import Footer from "../Footer/Footer";

const MainContainer = ({ backgroundRef }: IBackground) => {
  const [scrollIndex, setScrollIndex] = useState<number | undefined>(undefined);

  return (
    <S.MainContainer>
      <NavComponent
        backgroundRef={backgroundRef}
        setScrollIndex={setScrollIndex}
        scrollIndex={scrollIndex}
      />
      {componentsArr.map((item: IComponentsObj, index) => (
        <Section
          setScrollIndex={setScrollIndex}
          scrollIndex={scrollIndex}
          key={item.name}
          scrollId={index}
        >
          {item.comp}
        </Section>
      ))}
      <Footer />
    </S.MainContainer>
  );
};

export default MainContainer;
