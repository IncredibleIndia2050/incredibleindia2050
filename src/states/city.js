import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CityGuide = () => {
  const { cityName, state } = useParams();
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(cityName, state);
        const response = await fetch(`/data/state/${state}/${cityName}.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [cityName,state]);

  return (
    <div className="container">
      {data ? (
        <>
          <h1 className="mt-4 mb-4">Travel Guide for { cityName }</h1>
          {data.distrcts.map((district, index) => (
            <div key={index}>
              <h2 className="mt-3">{district.name}</h2>
              <div className="row">
                {district.places.map((place, i) => (
                  <div className="col-md-6" key={i}>
                    <div className="card mb-3">
                      <div className="card-body">
                        <h5 className="card-title">{place.name}</h5>
                        <p className="card-text">{place.description}</p>
                        <ul className="list-unstyled">
                          <li>
                            Entry Fees (Indian Tourists):{" "}
                            {place.entry_fees.indian_tourists}
                          </li>
                          <li>
                            Entry Fees (Foreign Tourists):{" "}
                            {place.entry_fees.foreign_tourists}
                          </li>
                          <li>Type: {place.type}</li>
                          <li>Timings: {place.timings}</li>
                          <li>Parking: {place.parking}</li>
                          <li>
                            Distance from City Center:{" "}
                            {place.distance_from_city_center}
                          </li>
                          <li>Google Rating: {place.google_rating}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CityGuide;
