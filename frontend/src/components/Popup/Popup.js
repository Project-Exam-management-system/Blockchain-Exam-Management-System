import { useState, useEffect } from "react";
import "./popup.css";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Popup({ image, close, location, showSubmitButton = true }) {
  const navigate = useNavigate();
  const [data, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputError("");
  };

  const handleSubmit = async () => {
    // Create a regular expression to match exactly seven digits
    const sevenDigitRegex = /^\d{7}$/;

    // Check if the input data matches the sevenDigitRegex
    if (sevenDigitRegex.test(data)) {
      navigate(`${location}`);
    } else {
      setInputError("Please enter exactly seven integers");
    }
  };

  useEffect(() => {
    // Disable scrolling when the popup is open
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the popup is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div className="overlay" onClick={close}></div>
      <div className="popup">
        <img src={image} alt="" className="" />

        <div className="text-box">
          <input
            className="inputid"
            type="text"
            placeholder="Enter your staff id"
            value={data}
            onChange={handleInputChange}
            required
          />
          {inputError && (
            <p className="error" style={{ fontSize: "12px" }}>
              {inputError}
            </p>
          )}

          {showSubmitButton && ( // Conditionally render the submit button based on showSubmitButton prop
            <button className="close" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Popup;
