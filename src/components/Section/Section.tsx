import { ReactElement, cloneElement, useRef, useEffect } from 'react';
import S from './styled';
import useObserver from '../../hooks/useObserver';

type TProps = {
  children: ReactElement;
  scrollIndex: number | undefined;
  scrollId: number;
};

const Section = (props: TProps) => {
  const myRef = useRef<HTMLElement>(null);
  const isVisible = useObserver(myRef);

  useEffect(() => {
    if (props.scrollIndex === props.scrollId) {
      myRef.current?.scrollIntoView();
    }
  }, [props.scrollIndex]);

  const newChild = cloneElement(props.children, { isVisible }); // pass props to dynamic children

  return (
    <S.Section className="section" isVisible={isVisible} ref={myRef}>
      {' '}
      {/* class name used as an id for the "getElementsByClassName" */}
      {newChild}
    </S.Section>
  );
};

export default Section;
