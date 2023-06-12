import { useEffect, useState } from "react";
import "./Choose.css";
import Lecturer from "../../imgs/lecturer.png";
import HOD from "../../imgs/HOD.png";
import Photocopy from "../../imgs/Photocopy.png";
import ExamsOfficer from "../../imgs/Exam Officer.png";
import Bulb from "../../imgs/bulb.png";
import Popup from "../Popup/Popup";

const Choose = () => {
  const [popup, setPopup] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  // const popRef = useRef(null);
  const handleClick = (img) => {
    setPopup(!popup);
    setCurrentImage(img);
  };

  // useEffect(()=>{
  //     function handleClickOutside(event){

  //         // if (popup && !popRef.current.contains(event.target) && event.target.className !== "popup"){
  //         //     setPopup(false)
  //         // }
  //     }
  //     document.addEventListener("mousedown", handleClickOutside)
  //     return ()=>{
  //         document.addEventListener("mousedown", handleClickOutside);
  //     }
  // }, [popup])
  return (
    <section className="choose-wrapper" id="choose-wrapper">
      <div className="flexCenter choose-head">
        <img src={Bulb} alt="" />
        <h2>Kindly select your status</h2>
      </div>
      <div className="flexCenter">
        <div className="flexCenter choose-container">
          <div
            className=" flexCenter div1"
            onClick={() => handleClick(Lecturer)}
          >
            <div className="lec">
              <img src={Lecturer} alt="" />
            </div>
            <span>Lecturer</span>
          </div>
          <div
            className="flexCenter div2"
            onClick={() => handleClick(ExamsOfficer)}
          >
            <div className="examsofficer">
              <img src={ExamsOfficer} alt="" />
            </div>
            <span>ExamsOfficer</span>
          </div>
          <div className="flexCenter div3" onClick={() => handleClick(HOD)}>
            <div className="hod">
              <img src={HOD} alt="" />
            </div>
            <span>H.O.D</span>
          </div>
          <div
            className="flexCenter div4"
            onClick={() => handleClick(Photocopy)}
          >
            <div className="photocopy">
              <img src={Photocopy} alt="" />
            </div>
            <span>Photocopy Unit</span>
          </div>
        </div>
        {popup && <Popup image={currentImage} close={() => setPopup(false)} />}
      </div>
    </section>
  );
};

export default Choose;
