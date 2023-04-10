import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <CircularProgress color="primary" />
    </div>
  );
};

export default Loader;
