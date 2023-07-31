import { useState, useEffect } from "react";
import "./popup.css";
import { Navigate, useNavigate } from "react-router-dom";


function Popup({ image, close, location }) {
  const navigate = useNavigate();
  const [data, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setInputError("");
  };

  const handleSubmit = async () => {
    if (data === "correctValue") {
      navigate(`${location}`);
    } else {
      setInputError("Please enter staff id");
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
