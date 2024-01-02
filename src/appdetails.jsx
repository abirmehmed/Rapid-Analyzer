import './appdetails.css';
import React, { useState, useEffect } from 'react';

const AppDetails = () => {
  const [appId, setAppId] = useState('');
  const [appDetails, setAppDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    setAppId(event.target.value);
  };

  const fetchAppDetails = () => {
    if (appId === '') {
      setErrorMessage('Please enter an App ID');
      return;
    }

    fetch(`http://127.0.0.1:5173/app-details?appId=${appId}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setErrorMessage('Wrong ID. Please enter a valid App ID');
          setAppDetails(null);
        } else {
          setAppDetails(data);
          setErrorMessage('');
        }
      })
      .catch((error) => console.error('Error fetching app details: ', error));
  };

  return (
    <div>
      <input type="text" value={appId} onChange={handleInputChange} placeholder="Enter App ID" />
      <button onClick={fetchAppDetails}>Get App Details</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div>
        <h1 style={{ fontWeight: 'bold', fontFamily: 'Arial', textAlign: 'center' }}>
          {appDetails && appDetails.title}
        </h1>
      </div>

      {appDetails && (
        <div className="app-details-container">
          <div className="app-details-box">
            <h2>Number of Downloads</h2>
            <p className="animated-number">{appDetails.minInstalls}</p>
          </div>
          <div className="app-details-box">
            <h2>Number of Reviews</h2>
            <p className="animated-number">{appDetails.reviews}</p>
          </div>
          <div className="app-details-box">
            <h2>App Rating</h2>
            <p className="animated-number">{appDetails.score}</p>
          </div>
          <div className="app-details-box">
            <h2>Total Number of Ratings</h2>
            <p className="animated-number">{appDetails.ratings}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
