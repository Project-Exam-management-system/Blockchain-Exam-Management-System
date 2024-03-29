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
        <form className=" flexCenter medium-form " onSubmit={(e) => e.preventDefault()}>
          <div className="input">
            <div className="input-item">
              <h2 className="Date">Date:</h2>
              <input
                name="date"
                type="date"
                placeholder="Date(DD-MM-YYYY)"
                maxLength="10"
                pattern="\d{2}-d{2}-\d{4}"
                title="Please enter a date in the format DD-MM-YYYY "
                required
                onBlur={(e) => {
                  e.target.reportValidity();
                }}
              />
            </div>
            <div className="input-item">
              <h2>Number of students:</h2>
              <input
                name="Number of students"
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Number of students"
                maxLength="5"
                onBlur={(e) => {
                  e.target.reportValidity();
                }}
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     e.preventDefault();
                //     e.target.reportValidity();
                //   }
                // }}
              />
            </div>
            <div className="input-item">
              <h2 className="Time">Time:</h2>
              <input
                name="time"
                type="time"
                placeholder="Time(HH:mm)"
                required
                onBlur={(e) => {
                  e.target.reportValidity();
                }}
                // onKeyDown={(e) => {
                //   if (e.key === "Enter") {
                //     e.preventDefault();
                //     e.target.reportValidity();
                //   }
                // }}
              />
            </div>
          </div>
        </form>

        <div className="drops">
          <div className="drop-item">
          <h2 className="Duration"> Duration:</h2>
            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="" disabled selected>Duration</option>
              <option value="option1">1 hour</option>
              <option value="option2">1 hour 30 minutes </option>
              <option value="option3">2 hours</option>
              <option value="option4">2 hours 30 minutes</option>
              <option value="option5">3 hours</option>
            </select>
          </div>

          <div className="drop-item">
          <h2 className="Venue">Venue:</h2>
            <select
              value={SelectedOption}
              onChange={handleSelectedOptionChange}
            >
              <option value="" disabled selected>Select an option</option>
              <option value="option1">Petroleum Building</option>
              <option value="option2">Bamfo Kwakye Building</option>
              <option value="option3">Ceaser Building</option>
              <option value="option4">Kumpaley Auditorium</option>
              <option value="option5">Another option</option>
            </select>
          </div>

          
        </div>
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
