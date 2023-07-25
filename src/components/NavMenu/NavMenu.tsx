import S from './styled';
import { componentsArr } from '../../modules/MainContainer/helper';
import { useRef, useEffect, RefObject } from 'react';

interface INavMenu {
  backgroundRef: RefObject<HTMLDivElement>;
  setScrollIndex: (item: number) => void;
  scrollIndex: number | undefined;
}

const NavMenu = (props: INavMenu) => {
  const myRef = useRef<HTMLDivElement>(null);
  const handleScrollMove = () => {
    const calcY =
      (window.scrollY / props.backgroundRef.current!.clientHeight) * 100; // calculate the new Y position on the page (precentage)
    myRef.current!.style.top = `${calcY}%`;
  };

  const setScrollIndex = (index: number) => () => props.setScrollIndex(index);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollMove);
    return () => {
      window.removeEventListener('scroll', handleScrollMove);
    };
  }, []);

  return (
    <S.NavWrapper>
      <S.MovingCurrentPage ref={myRef} />
      {componentsArr.map((item, index) => (
        <S.NavBtn
          key={item.name}
          scrollId={index}
          selected={props.scrollIndex}
          onClick={setScrollIndex(index)}
        />
      ))}
    </S.NavWrapper>
  );
};
export default NavMenu;
