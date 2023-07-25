import { useEffect } from 'react';

const useInitialiseLocalStorage = () => {
  useEffect(() => localStorage.setItem('scrollIndex', 'null'), []);
};

export default useInitialiseLocalStorage;
