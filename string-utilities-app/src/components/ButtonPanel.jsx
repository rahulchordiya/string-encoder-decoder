import React from 'react';

function ButtonPanel({ processText }) {
  const buttons = [
    { label: 'Base64 Encode', operation: 'base64encode' },
    { label: 'Base64 Decode', operation: 'base64decode' },
    { label: 'Base64Url Encode', operation: 'base64urlencode' },
    { label: 'Base64Url Decode', operation: 'base64urldecode' },
    { label: 'URL Encode', operation: 'urlencode' },
    { label: 'URL Decode', operation: 'urldecode' },
    { label: 'Hex Encode', operation: 'hexencode' },
    { label: 'Hex Decode', operation: 'hexdecode' },
    { label: 'JSON Pretty Print', operation: 'jsonpretty' },
    { label: 'JWT Decode', operation: 'jwtdecode' },
  ];

  return (
    <div className="buttons">
      {buttons.map(({ label, operation }) => (
        <button key={operation} onClick={() => processText(operation)}>
          {label}
        </button>
      ))}
    </div>
  );
}

export default ButtonPanel;
