import React from 'react';

const BestTimeToVisit = ({ data }) => {

    console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className="col small-card-top">
          <h4>Peak Season:</h4>
          <p>{data.peakSeason}</p>
        </div>
        <div className="col small-card-top">
          <h4>Moderate Season:</h4>
          <p>{data.moderateSesson}</p>
        </div>
        <div className="col small-card-top">
          <h4>Off-Season:</h4>
          <p>{data.offSeason}</p>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col small-card-top">
          <h4><i className="far fa-sun"></i> Summer:</h4>
          <p>{data.temperature.summer}</p>
        </div>
        <div className="col small-card-top">
          <h4><i className="fas fa-snowflake"></i> Winter:</h4>
          <p>{data.temperature.winter}</p>
        </div>
        <div className='col-md-6'></div>
      </div>
    </div>
  );
};

export default BestTimeToVisit;
