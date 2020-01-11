import { useState } from 'react';

const snippets = {
  1: {
    mode: 'javascript',
    value: 'const myFunc = (props) => {\n  console.log(props);\n};\n'
  },
  2: {
    mode: 'javascript',
    value: 'function addNumbers(a, b) {\n  return a + b;\n}\n'
  },
  3: {
    mode: 'htmlembedded',
    value: '<div>\n  <h1>My Title</h1>\n  <p>This is a paragraph.</p>\n</div>\n'
  }
};

export const useCodeSnippetState = () => {
  const [ codeSnippetId, setCodeSnippetId ] = useState(1);
  const [ codeSnippet, setCodeSnippet] = useState(snippets[codeSnippetId]);

  const setNextCodeSnippet = () => {
    setCodeSnippetId((state) => {
      return state < Object.keys(snippets).length ? state + 1 : 1;
    });
    setCodeSnippet(snippets[codeSnippetId]);
  };

  return { codeSnippet, setNextCodeSnippet };
};
