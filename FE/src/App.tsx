
import Background from './components/Background/Background';
import useCursor from './hooks/useCursor';
import useInitialConsole from './hooks/useInitialConsole';
import MainContainer from './modules/MainContainer';

const App = () => {
  const cursor = useCursor();
  useInitialConsole();
  return (
    <>
      <Background />
      {cursor}
      <MainContainer />
    </>
  );
};

export default App;
