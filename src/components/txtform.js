import React, { useState } from 'react';

export default function TextForm(props) {
  const [email, setEmail] = useState('');
  const [shieldCode, setShieldCode] = useState('');
  const [text, setText] = useState('');

  const convertToUppercase = () => {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  const convertTolowercase = () => {
    const lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  };

  const clearEmail = () => {
    setEmail('');
  };

  const clearShieldCode = () => {
    setShieldCode('');
  };

  const clearAll = () => {
    setEmail('');
    setShieldCode('');
    setText('');
  };

  return (
    <div>
      <div className="mb-3 mx-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <h1>Email address</h1>
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-primary my-3 mx-2" onClick={clearEmail}>
          Clear Email
        </button>
      </div>

      <div className="mb-1 mx-1 row" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <label htmlFor="inputPassword" className="col-sm-5 col-form-label">
          <h3>ShieldCode</h3>
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            value={shieldCode}
            onChange={(e) => setShieldCode(e.target.value)}
          />
          <button className="btn btn-primary my-3 mx-2" onClick={clearShieldCode}>
            Clear Shield Code
          </button>
        </div>
      </div>

      <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <label htmlFor="MyBox" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white' }} className="form-label">
          Let's Connect
        </label>
        <textarea
          className="form-control"
          id="MyBox"
          rows="3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <button className="btn btn-primary my-3 mx-2" onClick={convertToUppercase}>
          Convert to UPPERCASE
        </button>

        <button className="btn btn-primary my-3 mx-2" onClick={convertTolowercase}>
          Convert to lowercase
        </button>

        <button className="btn btn-primary my-3 mx-2" onClick={clearAll}>
          Clear All
        </button>
      </div>

    <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Text Summary</h1>
        <p>{text.trim().length === 0 ? '0 Words' : `${text.trim().split(" ").length} Words`} and {text.length} Characters</p>
        <p>{text.trim().length === 0 ? '0 minutes' : `It will take ${0.008 * text.trim().split(" ").length} minutes to read`}</p>
    </div>

    </div>
  );
}
