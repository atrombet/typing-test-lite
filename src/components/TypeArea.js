import React from 'react';

const TypeArea = ({userText, onChange}) => {
  return (
    <textarea className="type-area"
              rows="4"
              style={{color: !userText.matches && 'red'}}
              value={userText.text}
              onChange={onChange} />
  )
};

export default TypeArea;
