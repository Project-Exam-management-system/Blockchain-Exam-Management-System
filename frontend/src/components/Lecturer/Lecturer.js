import React, { useState } from "react";
import "./Lecturer.css";
import review from "../../imgs/review.png";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";

function Lecturer() {
  //const history = useHistory();
  const [inputData, setInputData] = useState("");
  const [inputError, setInputError] = useState("");
  const [show, setshow] = useState("false");
  const navigate = useNavigate();
  const handleClick = () => {
    setshow(!show);
  };

  const handleInputChange = (e) => {
    setInputData(e.target.value);
    setInputError("");
  };

  const handleSubmit = () => {
    const schema = Joi.string().length(6).required();
    const { error } = schema.validate(inputData);
    if (error) {
      setInputError(error.details[0].message + " eg. coe345");
    } else {
      setInputError(null);
      navigate("/choose/lecturer/review");
    }
  };

  return (
    <div className="quest">
      <div className="small-box">
        <div className="setQuestions">
          <Link to="questions">
            <div>
              <span>Set Questions</span>
              <img src={review} alt="" />
            </div>
          </Link>
        </div>
        <hr />
        <div className="review">
          <div className="review-box" onClick={handleClick}>
            <span>Review Questions</span>
            <img src={review} alt="" />
          </div>
          <div className="text-box">
            {show && (
              <input
                className="input"
                type="text"
                placeholder="Enter course code"
                value={inputData}
                onChange={handleInputChange}
                required
                pattern="correctValue"
              />
            )}
            {show && inputError && (
              <p className="error" style={{ fontSize: "12px" }}>
                {inputError}
              </p>
            )}
            {show && (
              <button className="close" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lecturer;
