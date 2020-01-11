import React from 'react';

const QuoteDisplay = ({quote}) => {
  return (
    <div className="mbxl">
      <h4 className="quote-title">{quote.title}</h4>
      <p className="quote-body">{quote.body}</p>
      <i className="quote-author">- {quote.author}</i>
    </div>
  );
};

export default QuoteDisplay;
