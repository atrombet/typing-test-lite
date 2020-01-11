import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteDisplay from './components/QuoteDisplay';
import TypeArea from './components/TypeArea';

function App() {

  // Quote State
  const [ quote ] = useState({
    title: 'My First Quote',
    author: 'Michael Scott',
    body: "You miss 100% of the shots you don't take. - Wayne Gretzky"
  });

  // User Text State
  const [ userText, setUserText ] = useState({
    text: '',
    matches: true
  });
  const onTextChange = (e) => {
    setUserText({
      text: e.target.value,
      matches: quote.body.indexOf(e.target.value) === 0
    });
    setQuoteComplete(e.target.value === quote.body);
  };

  // Quote Complete state
  const [ quoteComplete, setQuoteComplete ] = useState(false);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="page-header">Typing Test</h1>
        <QuoteDisplay quote={quote} />
        <TypeArea userText={userText} onChange={onTextChange} />
        {quoteComplete && <i className="done">Great Job!</i>}
      </header>
    </div>
  );
}

export default App;
