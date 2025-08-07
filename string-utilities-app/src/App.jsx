import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import InputArea from './components/InputArea';
import ButtonPanel from './components/ButtonPanel';
import OutputArea from './components/OutputArea';
import JwtDecoder from './components/JwtDecoder';

function App() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [activeTool, setActiveTool] = useState('string');
  const [jwtHeader, setJwtHeader] = useState(null);
  const [jwtPayload, setJwtPayload] = useState(null);

  function base64UrlDecode(str) {
    let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    let pad = base64.length % 4;
    if (pad) {
      if (pad === 2) base64 += '==';
      else if (pad === 3) base64 += '=';
    }
    return atob(base64);
  }

  function processText(operation) {
    setActiveTool('string');
    let output = '';

    switch(operation) {
      case 'base64encode':
        output = btoa(inputText);
        break;
      case 'base64decode':
        try {
          output = atob(inputText);
        } catch(e) {
          output = 'Invalid Base64 string';
        }
        break;
      case 'base64urlencode':
        output = btoa(inputText).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        break;
      case 'base64urldecode':
        try {
          output = base64UrlDecode(inputText);
        } catch(e) {
          output = 'Invalid Base64Url string';
        }
        break;
      case 'urlencode':
        output = encodeURIComponent(inputText);
        break;
      case 'urldecode':
        output = decodeURIComponent(inputText);
        break;
      case 'hexencode':
        output = Array.from(inputText).map(c => c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
        break;
      case 'hexdecode':
        output = inputText.match(/.{1,2}/g).map(byte => String.fromCharCode(parseInt(byte, 16))).join('');
        break;
      case 'jsonpretty':
        try {
          output = JSON.stringify(JSON.parse(inputText), null, 4);
        } catch(e) {
          output = 'Invalid JSON string';
        }
        break;
      case 'jwtdecode':
        try {
          const [header, payload] = inputText.split('.');
          const decodedHeader = JSON.parse(base64UrlDecode(header));
          const decodedPayload = JSON.parse(base64UrlDecode(payload));
          setJwtHeader(decodedHeader);
          setJwtPayload(decodedPayload);
          setActiveTool('jwt');
        } catch (e) {
          output = 'Invalid JWT string';
        }
        break;
      default:
        output = 'Invalid Operation';
    }
    if (activeTool === 'string') {
      setOutputText(output);
    }
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(outputText).then(() => {
      alert('Copied to clipboard!');
    }, () => {
      alert('Failed to copy to clipboard.');
    });
  }

  return (
    <div className="container">
      <Header />
      <InputArea inputText={inputText} setInputText={setInputText} />
      <ButtonPanel processText={processText} />
      {activeTool === 'string' ? (
        <OutputArea outputText={outputText} copyToClipboard={copyToClipboard} />
      ) : (
        <JwtDecoder header={jwtHeader} payload={jwtPayload} />
      )}
    </div>
  );
}

export default App;
