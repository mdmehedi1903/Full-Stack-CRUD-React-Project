import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: "rgba(1, 162, 255)", // Semi-transparent black overlay
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000, // Make sure it's above other elements
      }}
    >
      <Spinner animation="border" variant="light" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
