import { useState } from 'react';

export const useCompleteState = () => {
  const [ complete, setComplete ] = useState(false);
  return { complete, setComplete };
};
