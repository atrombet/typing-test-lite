import React from 'react';

const QuoteDisplay = ({quote}) => {
  return (
    <div className="mbxl">
      <h4 className="quote-title">{quote.title}</h4>
      <i className="quote-provided-by">Provided by: {quote.providedBy}</i>
      <code className="quote-body">{quote.body}</code>
    </div>
  );
};

export default QuoteDisplay;
