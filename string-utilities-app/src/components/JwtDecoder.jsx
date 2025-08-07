import React from 'react';

function JwtDecoder({ header, payload }) {
  return (
    <div className="jwt-decoder">
      <h2>Decoded JWT</h2>
      <div className="jwt-section">
        <h3>Header</h3>
        <pre>{JSON.stringify(header, null, 2)}</pre>
      </div>
      <div className="jwt-section">
        <h3>Payload</h3>
        <pre>{JSON.stringify(payload, null, 2)}</pre>
      </div>
    </div>
  );
}

export default JwtDecoder;
