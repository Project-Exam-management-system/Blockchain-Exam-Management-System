import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
      alert('Please select a PDF file.');
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      // Perform file upload logic here
      console.log('Uploading file:', selectedFile);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <h1>PDF File Upload</h1>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
