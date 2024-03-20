import React from "react";

const Restaurants = ({ restaurants }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {restaurants.map((cafe, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{cafe.name}</h5>
                  <p className="card-text">{cafe.location}</p>
                  <p className="card-text">{cafe.google_rating}</p>
                  <a href={cafe.detailed_page} className="btn btn-primary">
                    More Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
