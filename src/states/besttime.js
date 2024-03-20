import React from 'react';

const BestTimeToVisit = ({ data }) => {

    console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>Peak Season:</h4>
          <p>{data.peakSeason}</p>
        </div>
        <div className="col">
          <h4>Moderate Season:</h4>
          <p>{data.moderateSesson}</p>
        </div>
        <div className="col">
          <h4>Off-Season:</h4>
          <p>{data.offSeason}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Summer:</h4>
          <p>{data.temperature.summer}</p>
        </div>
        <div className="col">
          <h4>Winter:</h4>
          <p>{data.temperature.winter}</p>
        </div>
      </div>
    </div>
  );
};

export default BestTimeToVisit;
