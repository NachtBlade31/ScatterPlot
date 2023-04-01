import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const UploadWidget = ({ onUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    const formData = new FormData();
    formData.append('file', file);
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => onUpload(data))
      .catch((error) => console.error(error));
  };

  return (
    <Box>
      <Typography variant="h5">Upload dataset</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <input type="file" onChange={handleFileChange} />
        <Button variant="contained" onClick={handleUploadClick} disabled={!file}>
          Upload
        </Button>
      </Box>
    </Box>
  );
};

export default UploadWidget;
