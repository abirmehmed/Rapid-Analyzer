import './appdetails.css';
import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

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

  useEffect(() => {
    if (appDetails) {
      const ratingsData = Object.entries(appDetails.histogram).map(([rating, count]) => ({
        rating: +rating,
        count: +count,
      }));
  
      const svg = d3.select('.ratings-chart');
  
      // Remove the existing chart
      svg.selectAll('svg').remove();
  
      const margin = { top: 20, right: 20, bottom: 50, left: 50 };
      const width = 500 - margin.left - margin.right;
      const height = 300 - margin.top - margin.bottom;
  
      const xScale = d3.scaleBand()
        .domain(ratingsData.map(d => d.rating))
        .range([0, width])
        .padding(0.1);
  
      const maxCount = d3.max(ratingsData, d => d.count);
      const yScale = d3.scaleLinear()
        .domain([0, maxCount])
        .range([height, 0]);
  
      const colorScale = d3.scaleOrdinal()
        .domain(ratingsData.map(d => d.rating))
        .range(d3.schemeCategory10);
  
      const chart = svg.append('svg')
        .attr('width', 500)
        .attr('height', 300)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
      chart.selectAll('rect')
        .data(ratingsData)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d.rating))
        .attr('y', d => yScale(d.count))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.count))
        .attr('fill', d => colorScale(d.rating))
        .on('click', d => console.log(`Rating: ${d.rating}, Count: ${d.count}`));
  
      chart.selectAll('text')
        .data(ratingsData)
        .enter()
        .append('text')
        .attr('x', d => xScale(d.rating) + xScale.bandwidth() / 2 - xScale.bandwidth() / 3)
        .attr('y', d => yScale(d.count) - 10)
        .attr('dy', '0.35em')
        .text(d => d.count);
  
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale).ticks(5).tickFormat(d3.format(".0s"));
  
      chart.append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(xAxis);
  
      chart.append('g')
        .call(yAxis);
  
      chart.append('text')
        .attr('x', width / 2)
        .attr('y', height + margin.bottom - 10)
        .attr('text-anchor', 'middle')
        .style('font-weight', 'bold')
        .style('font-family', 'Arial')
        .text('Data Visualization of People\'s Ratings');
    }
  }, [appDetails]);
  
  
  
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
            <p className="animated-number">{appDetails.maxInstalls}</p>
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

      <div className="ratings-chart"></div>
    </div>
  );
};

export default AppDetails;
