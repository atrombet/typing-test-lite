import { useState } from 'react';

export const useUserTextState = () => {
  const [ userText, setUserText ] = useState({
    text: '',
    matches: true
  });
  return { userText, setUserText };
};
