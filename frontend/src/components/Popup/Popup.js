import { useState } from "react";
import "./popup.css";
import { Navigate, useNavigate } from "react-router-dom";

function Popup({ image, close, location }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputError("");
  };

  const handleSubmit = () => {
    if (inputValue === "correctValue") {
      navigate(`${location}`);
    } else {
      setInputError("Please enter staff id");
    }
  };
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
            value={inputValue}
            onChange={handleInputChange}
            required
            pattern="correctValue"
          />
          {inputError && (
            <p className="error" style={{ fontSize: "12px" }}>
              {inputError}
            </p>
          )}

          <button className="close" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Popup;
