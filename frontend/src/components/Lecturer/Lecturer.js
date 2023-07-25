import React, { useState } from "react";
import "./Lecturer.css";
import review from "../../imgs/review.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import Joi from "joi";
import { useEffect } from "react";
import Popup from "../Popup/Popup";

function Lecturer() {
  const param = useParams();
  const [inputData, setInputData] = useState("");
  const [inputError, setInputError] = useState("");
  const [show, setshow] = useState("");
  const [user, setUser] = useState("");
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

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
  useEffect(() => {
    const user1 = JSON.parse(localStorage.getItem("user"));
    setUser(user1);
  }, []);

  const handleClick = () => {
    setPopup(!popup);
  };

  return (
    <div className="quest">
      <p className="userinfo">{user.name}</p>
      <div className="boxes">
        <div className="small-box">
          <div className="setQuestions Q">
            <Link to="questions">
              <div>
                <span>Set Questions</span>
                <img src={review} alt="" />
              </div>
            </Link>
          </div>
          <hr />
          <div className="review ">
            <div className="review-box" onClick={handleClick}>
              <span>Review Questions</span>
              <img src={review} alt="" />
            </div>
          </div>
        </div>
      </div>
      {popup && <Popup close={() => setPopup(false)} />}
    </div>
  );
}

export default Lecturer;
