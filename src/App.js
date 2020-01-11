import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteDisplay from './components/QuoteDisplay';
import TypeArea from './components/TypeArea';
import { useQuoteState, useCompleteState, useUserTextState } from './state';

function App() {
  const { quote } = useQuoteState();
  const { userText, setUserText } = useUserTextState();
  const { complete, setComplete } = useCompleteState();

  const onTextChange = (e) => {
    setUserText({
      text: e.target.value,
      matches: quote.body.indexOf(e.target.value) === 0
    });
    setComplete(e.target.value === quote.body);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="page-header">Typing Test</h1>
        <QuoteDisplay quote={quote} />
        <TypeArea userText={userText} onChange={onTextChange} />
        {complete && <i className="done">Great Job!</i>}
      </header>
    </div>
  );
}

export default App;
