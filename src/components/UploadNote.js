// components/UploadNote.js
import React, { useState, useEffect } from 'react';

const UploadNote = () => {
  const [file, setFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  useEffect(() => {
    if (file) {
      console.log("File selected:", file.name);
    }
  }, [file]);

  const handleUpload = () => {
    if (file) {
      setUploaded(true);
    }
  };

  return (
    <div className="p-4 border rounded-xl shadow-md">
      <h2>Upload Handwritten Note</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>Upload</button>
      {uploaded && <p>File uploaded: {file.name}</p>}
    </div>
  );
};

export default UploadNote;