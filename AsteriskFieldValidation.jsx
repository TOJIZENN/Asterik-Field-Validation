import React, { useState } from 'react';
import "./styles.css";

function AsteriskFieldValidation() {
  const [set1, setstate] = useState('');
  const [set2, setstate2] = useState('');
  const [yes, setyes] = useState(false);
  const [no, setno] = useState(false);

  function handle(e) {
    e.preventDefault(); // Prevent page reload

    // If any required field is empty
    if (set1.length === 0 || set2.length === 0) {
      setyes(true);
      setno(false);
    }
    // If both fields are filled
    else {
      setno(true);
      setyes(false);
    }
  }

  function handle1(val) {
    setstate(val.trim());
  }

  function handle2(val) {
    setstate2(val.trim());
  }

  return (
    <div className="container">
      <h1 className="title">Asterisk Field Validation</h1>

      <form className="form" data-testid="form">
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            id="name"
            className="input"
            type="text"
            data-testid="name-input"
            placeholder="Enter your name"
            onChange={(e) => handle1(e.target.value)}
          />
          {yes && set1.length === 0 && (
            <span className="error" data-testid="name-error">
              Name is required
            </span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            id="location"
            className="input"
            type="text"
            data-testid="location-input"
            placeholder="Enter your location"
            onChange={(e) => handle2(e.target.value)}
          />
          {yes && set2.length === 0 && (
            <span className="error" data-testid="location-error">
              Location is required
            </span>
          )}
        </div>

        <button
          type="submit"
          className="submit-button"
          data-testid="submit-button"
          onClick={handle}
        >
          Submit
        </button>
      </form>

      {no && (
        <div className="success-message" data-testid="success-message">
          <span>Submitted Successfully!</span>
          <br />
          <span>Name: {set1}</span>
          <br />
          <span>Location: {set2}</span>
        </div>
      )}
    </div>
  );
}

export default AsteriskFieldValidation;
