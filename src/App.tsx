import { RefObject, useRef, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import Background from './components/Background/Background';
import useCursor from './hooks/useCursor';
import useInitializeConsole from './hooks/useInitialiseConsole';
import MainContainer from './modules/MainContainer/MainContainer';
import useScrollTopOnRefresh from './hooks/useScrollTopOnRefresh';

export interface IBackground {
  backgroundRef: RefObject<HTMLDivElement>;
}

export const isMobile = !!(
  Math.min(window.innerWidth, window.outerWidth) < 900
);

type MyTheme = {
  isMobile: boolean;
  cursor: string;
  borderRadius: string;
  randomColor: string;
  colors: {
    primary: string;
    secondary: string;
    main: string; // Add this property
  };
};

declare module 'styled-components' {
  export interface DefaultTheme extends MyTheme {}
}

const App = () => {
  const cursor = useCursor();
  const backgroundRef = useRef<HTMLDivElement>(null);
  useInitializeConsole();
  useScrollTopOnRefresh();

  const theme = useMemo(
    () => ({
      isMobile,
      cursor: `${isMobile ? 'pointer' : 'none'}`,
      borderRadius: '4px',
      randomColor: '#000',
      colors: {
        primary: '#fff',
        secondary: '#000',
        main: '#ccc', // Set your desired value for main
      },
    }),
    [isMobile]
  );

  return (
    <div ref={backgroundRef}>
      <ThemeProvider theme={theme}>
        <Background backgroundRef={backgroundRef} />
        {cursor}
        <MainContainer backgroundRef={backgroundRef} />
      </ThemeProvider>
    </div>
  );
};

export default App;
