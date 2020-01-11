import { useState } from 'react';

const quotes = {
  1: {
    id: 1,
    title: 'The Office',
    providedBy: 'Michael Scott',
    body: 'You miss 100% of the shots you don\'t take. - Wayne Gretzky'
  },
  2: {
    id: 2,
    title: 'Code Example',
    providedBy: 'KairosTech',
    body: 'const myFunc = (props) => {\n  console.log(props);\n};'
  }
};


export const useQuoteState = () => {
  const [ quote ] = useState(quotes[2]);
  return { quote };
};
