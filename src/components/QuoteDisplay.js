import React from 'react';

const QuoteDisplay = ({quote}) => {
  return (
    <div className="mbxl">
      <h1 className="quote-header">{quote.title}</h1>
      <p className="quote-body">{quote.body}</p>
      <i className="quote-author">- {quote.author}</i>
    </div>
  );
};

export default QuoteDisplay;
