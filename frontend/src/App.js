import React, { useState } from 'react';
import { Container } from '@mui/material';
import UploadWidget from './components/UploadWidget';
import ScatterPlot from './components/ScatterPlot';

const App=()=> {
  const [data, setData] = useState(null);

  const handleUpload = (data) => {
    setData(data);
  };

  return (
    <Container>
      <UploadWidget onUpload={handleUpload} />
      {data && <ScatterPlot data={data} />}
    </Container>
  );
}

export default App;
