import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuoteDisplay from './components/QuoteDisplay';
import TypeArea from './components/TypeArea';

function App() {
  const quote = {
    title: 'My First Quote',
    author: 'Michael Scott',
    body: "You miss 100% of the shots you don't take."
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QuoteDisplay quote={quote} />
        <TypeArea />
      </header>
    </div>
  );
}

export default App;
