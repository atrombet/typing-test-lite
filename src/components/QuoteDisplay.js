import React from 'react';

const QuoteDisplay = ({quote}) => {
  return (
    <div className="mbxl">
      <p className="quote-body">{quote.body}</p>
      <i className="quote-author">- {quote.author}</i>
    </div>
  );
};

export default QuoteDisplay;
