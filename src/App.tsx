import { RefObject, useRef } from 'react';
import Background from './components/Background/Background';
import useCursor from './hooks/useCursor';
import useInitialiseConsole from './hooks/useInitialiseConsole';
import MainContainer from './modules/MainContainer/MainContainer';
import useScrollTopOnRefresh from './hooks/useScrollTopOnRefresh';
import useInitialiseLocalStorage from './hooks/useinitialiseLocalStorage';

export interface IBackground {
  backgroundRef: RefObject<HTMLDivElement>;
}

const App = () => {
  const cursor = useCursor();
  const backgroundRef = useRef<HTMLDivElement>(null);
  useInitialiseConsole();
  useInitialiseLocalStorage(); // important for scroll index
  useScrollTopOnRefresh();

  return (
    <div ref={backgroundRef}>
      <Background backgroundRef={backgroundRef} />
      {cursor}
      <MainContainer backgroundRef={backgroundRef} />
    </div>
  );
};

export default App;
