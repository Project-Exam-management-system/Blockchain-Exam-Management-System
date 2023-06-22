import React, { useState } from "react";
import "./Questions.css";
import DropdownMenu from "./New";

const Questions = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptions, setSelectedOptions] = useState("");
  const [SelectedOption, setSelectedOptionss] = useState("");
  const [selectedOptionss, setSelectedOptionsss] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSelectedOptionChange = (event) => {
    setSelectedOptionss(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert("Please select a PDF file.");
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Perform file upload logic here
      console.log("Uploading file:", selectedFile);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="big">
      <div className="medium">
        <form className="medium-form" onSubmit={(e) => e.preventDefault()}>
          <div className="input">
            <div className="input-item">
              <h2 className="Date">Date:</h2>
              <input
                name="date"
                type="text"
                placeholder="Date"
                maxLength="29"
              />
            </div>
            <div className="input-item">
              <h2>Number of students:</h2>
              <input
                name="venue"
                type="text"
                placeholder="Venue"
                maxLength="29"
              />
            </div>
            <div className="input-item">
              <h2 className="Time">Time:</h2>
              <input
                name="time"
                type="text"
                placeholder="Time"
                maxLength="29"
              />
            </div>
          </div>

          <div className="drops">
            <div className="drop-item">
              <select value={selectedOption} onChange={handleOptionChange}>
                <option value="">Duration</option>
                <option value="option1">1 hour</option>
                <option value="option2">1 hour 30 minutes </option>
                <option value="option3">2 hours</option>
                <option value="option4">2 hours 30 minutes</option>
                <option value="option5">3 hours</option>
              </select>
            </div>

            <div className="drop-item">
              <select
                value={SelectedOption}
                onChange={handleSelectedOptionChange}
              >
                <option value="">Select an option</option>
                <option value="option1">Petroleum Building</option>
                <option value="option2">Bamfo Kwakye Building</option>
                <option value="option3">Ceaser Building</option>
                <option value="option4">Kumpaley Auditorium</option>
                <option value="option5">Another option</option>
              </select>
            </div>

            <DropdownMenu />
          </div>
        </form>
      </div>

      <div className="upload" bg-white>
        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload" className="file-upload-label">
          {selectedFile ? selectedFile.name : "Select a PDF file"}
        </label>
      </div>
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default Questions;
