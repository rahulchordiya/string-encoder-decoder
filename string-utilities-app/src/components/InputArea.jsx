import React from 'react';

function InputArea({ inputText, setInputText }) {
  return (
    <textarea
      id="inputText"
      placeholder="Enter your string here..."
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
    ></textarea>
  );
}

export default InputArea;
