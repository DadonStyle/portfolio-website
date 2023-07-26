import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { isMobile } from '../App';

const Cursor = styled.div`
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: rgb(0, 0, 0);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  border: 1px dotted white;
  transform: translate(-50%, -50%);
  opacity: 0.6;
`;

const useCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    cursorRef.current!.style.left = `${clientX}px`; // !. tells TS its not null for sure
    cursorRef.current!.style.top = `${clientY}px`;
  };

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return isMobile ? <></> : <Cursor ref={cursorRef} />;
};

export default useCursor;
