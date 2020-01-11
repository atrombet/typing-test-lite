import React from 'react';
import { UnControlled } from 'react-codemirror2';
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/htmlembedded/htmlembedded');

const CodeDisplay = ({codeSnippet}) => {
  const options = {
    readOnly: 'nocursor',
    mode: codeSnippet.mode,
    theme: 'darcula',
    tabSize: 2,
    lineNumbers: true
  };

  return (
    <UnControlled className="code-block"
                  options={options}
                  value={codeSnippet.value}
                  onChange={() => {}}/>
  )
};

export default CodeDisplay;
