import React from "react";
import "./Lecturer.css";
import review from "../../imgs/review.png";
function Lecturer() {
  const CheckUser = () => {};

  return (
    <div className="quest">
      <div className="small-box">
        <div className="setQuestions">
          <span>Set Questions</span>
          <img src={review} alt="" />
        </div>
        <hr />
        <div className="review">
          <span>Review Questions</span>
          <img src={review} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Lecturer;
