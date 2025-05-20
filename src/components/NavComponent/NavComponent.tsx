import S from "./styled";
import { componentsArr } from "../../modules/MainContainer/helper";
import { useRef, useEffect, RefObject } from "react";
import { isMobile } from "../../App";

interface INavComponent {
  backgroundRef: RefObject<HTMLDivElement>;
  setScrollIndex: (item: number) => void;
  scrollIndex: number | undefined;
}

const NavComponent = (props: INavComponent) => {
  const setScrollIndex = (index: number) => () => props.setScrollIndex(index);

  if (isMobile) return;

  return (
    <S.NavWrapper>
      {componentsArr.map((item, index) => (
        <S.NavBtn
          key={item.name}
          scrollId={index}
          selected={props.scrollIndex === index}
          onClick={setScrollIndex(index)}
        />
      ))}
    </S.NavWrapper>
  );
};
export default NavComponent;
