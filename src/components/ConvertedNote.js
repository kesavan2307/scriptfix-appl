// components/ConvertedNote.js
import React, { useState, useEffect } from 'react';

const ConvertedNote = () => {
  const [convertedText, setConvertedText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching OCR result
    const timeout = setTimeout(() => {
      setConvertedText("This is your converted digital note from handwriting.");
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="p-4 border rounded-xl shadow-md mt-4">
      <h2>Converted Digital Note</h2>
      {loading ? <p>Processing...</p> : <p>{convertedText}</p>}
    </div>
  );
};

export default ConvertedNote;
