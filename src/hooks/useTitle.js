import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Fitney`;
  }, [title]);
};

export default useTitle;
