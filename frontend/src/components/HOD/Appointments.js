/*import { useEffect, useState } from "react";
import "./Appointment.css";

const Appointments = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    yearSelection("Year 1");
  }, []);

  const yearSelection = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <div className="P bg-gray-500">
        <div className="B">
          <div
            className="box1"
            style={{
              backgroundColor: `${
                selectedYear === "Year 1" ? "#21da10" : "white"
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
                selectedYear === "Year 2" ? "#21da10" : "white"
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
                selectedYear === "Year 3" ? "#21da10" : "white"
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
                selectedYear === "Year 4" ? "#21da10" : "white"
              }`,
            }}
            onClick={() => yearSelection("Year 4")}
          >
            Year4
          </div>
        </div>
        <div className="R">
          <div className="drop-item">
            <h5>Computer Architecture</h5>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">--Select a Lecturer</option>
              <option value="option1">Nicholina </option>
              <option value="option2">Francis </option>
              <option value="option3">Jacob</option>
            </select>
          </div>

          <div className="drop-item">
            <h5>Computer Architecture</h5>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">--Select a Lecturer</option>
              <option value="option11">Nicholina </option>
              <option value="option22">Francis </option>
              <option value="option33">Jacob</option>
            </select>
          </div>

          <div className="drop-item">
            <h5>Computer Architecture</h5>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">--Select a Lecturer</option>
              <option value="option111">Nicholina </option>
              <option value="option222">Francis </option>
              <option value="option333">Jacob</option>
            </select>
          </div>
          <div className="drop-item">
            <h5>Computer Architecture</h5>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">--Select a Lecturer</option>
              <option value="option111">Nicholina </option>
              <option value="option222">Francis </option>
              <option value="option333">Jacob</option>
            </select>
          </div>
          <div className="drop-item">
            <h5>Computer Networking</h5>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">--Select a Lecturer</option>
              <option value="option111">Nicholina </option>
              <option value="option222">Francis </option>
              <option value="option333">Jacob</option>
            </select>
          </div>
          <div className="drop-item">
            <h5>Artificial Intelligence</h5>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">--Select a Lecturer</option>
              <option value="option111">Nicholina </option>
              <option value="option222">Francis </option>
              <option value="option333">Jacob</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointments;

*/
