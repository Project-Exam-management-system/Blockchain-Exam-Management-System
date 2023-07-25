import { useEffect, useState } from "react";
import "./Approvals.css";
import pdficon from "../../imgs/pdficon.png";

const Approvals = () => {
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    yearSelection("Year 1");
  }, []);

  const yearSelection = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="P ">
      <div className="B">
        <div
          className="box1"
          style={{
            backgroundColor: `${
              selectedYear === "Year 1" ? " #21da10" : "white"
            }`,
          }}
          onClick={() => yearSelection("Year 1")}
        >
          Year1
        </div>
        <div
          className="box2"
          style={{
            backgroundColor: `${
              selectedYear === "Year 2" ? " #21da10" : "white"
            }`,
          }}
          onClick={() => yearSelection("Year 2")}
        >
          Year2
        </div>
        <div
          className="box3"
          style={{
            backgroundColor: `${
              selectedYear === "Year 3" ? " #21da10" : "white"
            }`,
          }}
          onClick={() => yearSelection("Year 3")}
        >
          Year3
        </div>
        <div
          className="box4"
          style={{
            backgroundColor: `${
              selectedYear === "Year 4" ? " #21da10" : "white"
            }`,
          }}
          onClick={() => yearSelection("Year 4")}
        >
          Year4
        </div>
      </div>
      <div className="C">
        <div className="unit">
          <img src={pdficon} alt="" />
          <div className="Option">
            <button> Approve</button>
            <button> Decline</button>
          </div>
        </div>
        <div className="unit">
          <img src={pdficon} alt="" />
          <div className="Option">
            <button> Approve</button>
            <button> Decline</button>
          </div>
        </div>
        <div className="unit">
          <img src={pdficon} alt="" />
          <div className="Option">
            <button> Approve</button>
            <button> Decline</button>
          </div>
        </div>
        <div className="unit">
          <img src={pdficon} alt="" />
          <div className="Option">
            <button> Approve</button>
            <button> Decline</button>
          </div>
        </div>
        <div className="unit">
          <img src={pdficon} alt="" />
          <div className="Option">
            <button> Approve</button>
            <button> Decline</button>
          </div>
        </div>
        <div className="unit">
          <img src={pdficon} alt="" />
          <div className="Option">
            <button> Approve</button>
            <button> Decline</button>
          </div>
        </div>
        <div className="unit">
          <img src={pdficon} alt="" />
          <div className="Option">
            <button> Approve</button>
            <button> Decline</button>
          </div>
        </div>
        <div className="unit">
          <img src={pdficon} alt="" />
          <div className="Option">
            <button> Approve</button>
            <button> Decline</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approvals;
