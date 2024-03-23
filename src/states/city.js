import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Places from "./places";
import Cafes from "./cafes";
import Restaurants from "./resturantes";
import Transportation from "./transportation";
import BestTimeToVisit from "./besttime";

const CityGuide = () => {
  const { country, city, state } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log(city, state);
    const fetchData = async () => {
      try {
        console.log(city, state);
        const response = await fetch(
          `/data/country/${country}/state/${state}/${city}.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [country, city, state]);

  return (
    <div className="container">
      {data ? (
        <>
          <h1 className="mt-4 mb-4"> Travel Guide for {city} </h1>
          {/* create a component for places and use it here */}
          {data.districts.map((district, index) => (
            <div key={index}>
              <div className="">
                <div className="time-to-visit-section standard-grey-wrap">
                <h2 className="sub-headers">Best time to visit</h2>
                <BestTimeToVisit data={district.bestTime} />
                </div>
                <div className="standard-grey-wrap places-section">
                <h2 className="sub-headers">Places</h2>
                <Places data={district.places} />
                </div>
                <h2 className="sub-headers">Transportation</h2>
                <Transportation transportation={district.transportation} />
                <h2 className="sub-headers">Cafes</h2>
                <Cafes cafes={district.cafes} />
                <h2 className="sub-headers">Restaurants</h2>
                <Restaurants restaurants={district.restaurants} />
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

//create a places component in the same page and use it here
