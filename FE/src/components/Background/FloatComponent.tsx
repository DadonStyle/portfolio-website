import { useState, PropsWithChildren, ReactNode, useRef } from 'react';
import S from './styled';
import { generateFloat } from './helper';

interface IFloatComponent {
  svg: ReactNode;
  backgroundRef: any;
}

interface IPosition {
  x: number;
  y: number;
  o: number;
  s: number;
}

const FloatComponent = (props: PropsWithChildren<IFloatComponent>) => {
  const dragRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<IPosition>({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    o: 0,
    s: 1,
  });

  // put the correct event here !
  const handleOnDrag = (e: any) => {
    e.preventDefault();
    const ref = dragRef.current?.getBoundingClientRect();
    if (!ref) return;
    const calcX = (e.pageX / props.backgroundRef.current.clientWidth) * 100; // calculate the new X position on the page (precentage)
    const calcY = (e.pageY / props.backgroundRef?.current.clientHeight) * 100; // calculate the new Y position on the page (precentage)
    setPosition({ x: calcX, y: calcY, o: 1, s: 1 });
  };

  return (
    <S.AnimationWrapper
      key={Math.random()}
      floatAnimation={generateFloat(
        position.y,
        position.x,
        position.o,
        position.s
      )}
      onDragEnd={handleOnDrag}
      ref={dragRef}
    >
      {props.svg}
    </S.AnimationWrapper>
  );
};

export default FloatComponent;
