import { useEffect } from 'react';

const useScrollTopOnRefresh = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
};

export default useScrollTopOnRefresh;
