import { useState } from 'react';

export const useQuoteState = () => {
  const [ quote ] = useState({
    title: 'The Office',
    author: 'Michael Scott',
    body: 'You miss 100% of the shots you don\'t take. - Wayne Gretzky'
  });
  return { quote };
};
