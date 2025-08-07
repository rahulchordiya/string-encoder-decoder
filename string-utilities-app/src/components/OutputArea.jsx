import React from 'react';

function OutputArea({ outputText, copyToClipboard }) {
  return (
    <div className="output" id="outputText">
      <button className="copy-btn" onClick={copyToClipboard}>Copy</button>
      <div id="outputContent">{outputText}</div>
    </div>
  );
}

export default OutputArea;
