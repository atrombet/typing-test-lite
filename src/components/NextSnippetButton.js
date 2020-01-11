import React from 'react';

const NextSnippetButton = ({nextSnippetClick}) => {
  return (
    <button className="next-snippet-button" onClick={nextSnippetClick}>Next Code Snippet</button>
  )
};

export default NextSnippetButton;
