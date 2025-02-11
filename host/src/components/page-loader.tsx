import React from 'react';
import './page-loader.css'; // Ensure you create this CSS file

const PageLoader = () => {
  return (
    <div className="spinner">
      <div className="bounce1"></div>
      <div className="bounce2"></div>
      <div className="bounce3"></div>
    </div>
  );
};

export default PageLoader;