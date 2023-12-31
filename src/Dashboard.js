// Dashboard.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Dashboard = () => {
  const verticalBarChart1Ref = useRef(null);
  const verticalBarChart2Ref = useRef(null);

  useEffect(() => {
   
    const verticalBarChartData1 = {
      labels: ['Pune', 'Hyderabad', 'Banglore', 'Delhi'],
      datasets: [
        {
          label: 'Revenue',
          backgroundColor: 'rgba(46, 139, 87, 0.8)', 
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255, 255, 255, 1)',
          hoverBorderColor: 'rgba(255, 255, 255, 1)',
          data: [65, 59, 80, 81],
        },
      ],
    };

    
    const verticalBarChartData2 = {
      labels: ['HR', 'Associate dev', 'Senior dev', 'peon'],
      datasets: [
        {
          label: 'Revenue',
          backgroundColor: 'rgba(46, 139, 87, 0.8)', 
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255, 255, 255, 1)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [150, 170, 200, 110],
        },
      ],
    };

    
    const options = {
      scales: {
        x: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          position: 'top',
        },
      },
    };

    
    if (verticalBarChart1Ref.current && verticalBarChart1Ref.current.chart) {
      verticalBarChart1Ref.current.chart.destroy();
    }
    if (verticalBarChart2Ref.current && verticalBarChart2Ref.current.chart) {
      verticalBarChart2Ref.current.chart.destroy();
    }

   
    const verticalBarChart1Ctx = verticalBarChart1Ref.current.getContext('2d');
    const verticalBarChart2Ctx = verticalBarChart2Ref.current.getContext('2d');

    
    const verticalBarChart1 = new Chart(verticalBarChart1Ctx, {
      type: 'bar',
      data: verticalBarChartData1,
      options: options,
    });

    
    const verticalBarChart2 = new Chart(verticalBarChart2Ctx, {
      type: 'bar',
      data: verticalBarChartData2,
      options: options,
    });

   
    verticalBarChart1Ref.current.chart = verticalBarChart1;
    verticalBarChart2Ref.current.chart = verticalBarChart2;
  }, []); // Run this effect only once when the component mounts

  return (
    <>
    <div>
       {/* Heading for the card section */}
      <h2>Company Metrics</h2>

{/* Cards displaying company metrics */}
<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap:'20px', marginBottom: '20px' }}>
  <div style={{ backgroundColor: 'white', width: '200px', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
    <h3>Revenue</h3>
    <p>$1,000,000</p>
  </div>
  <div style={{ backgroundColor: 'white', width: '200px', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
    <h3>Profit</h3>
    <p>$500,000</p>
  </div>
  <div style={{ backgroundColor: 'white', width: '200px', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
    <h3>Employees</h3>
    <p>100</p>
  </div>
  {/* Add more cards as needed */}
  <div style={{ backgroundColor: 'white', width: '200px', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
    <h3>Jobs</h3>
    <p>40</p>
  </div>
  <div style={{ backgroundColor: 'white', width: '200px', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
    <h3>Membership</h3>
    <p>53</p>
  </div>
    
</div>

    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2>Revenue by job location</h2>
        {/* Canvas for the first vertical bar chart */}
        <canvas style={{backgroundColor:'white'}} ref={verticalBarChart1Ref} width={400} height={200}></canvas>
      </div>
      <div>
        <h2>Revenue by job type</h2>
        {/* Canvas for the second vertical bar chart */}
        <canvas style={{backgroundColor:'white'}} ref={verticalBarChart2Ref} width={400} height={200}></canvas>
      </div>
    </div>
    </div>
    </>
  );
};

export default Dashboard;
