import React from 'react';
import logo from './logo.svg';
import './App.css';
import NextSnippetButton from './components/NextSnippetButton';
import TypeArea from './components/TypeArea';
import { useQuoteState, useCompleteState, useUserTextState, useCodeSnippetState } from './state';
import CodeDisplay from './components/CodeDisplay';

function App() {
  const { quote } = useQuoteState();
  const { userText, setUserText } = useUserTextState();
  const { complete, setComplete } = useCompleteState();
  const { codeSnippet, setNextCodeSnippet } = useCodeSnippetState();

  const onTextChange = (e) => {
    setUserText({
      text: e.target.value,
      matches: quote.body.indexOf(e.target.value) === 0
    });
    setComplete(e.target.value === quote.body);
  };

  const onNextSnippetClick = () => {
    console.log('click');
    setNextCodeSnippet();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="page-header">Typing Test</h1>
        <CodeDisplay codeSnippet={codeSnippet} />
        <TypeArea userText={userText} onChange={onTextChange} />
        {complete && <i className="done">Great Job!</i>}
        <NextSnippetButton nextSnippetClick={onNextSnippetClick} />
      </header>
    </div>
  );
}

export default App;
