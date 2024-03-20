const Places = ({ data }) => {
    return (
      <>
        {data.map((place, i) => (
          <div className="col-md-3" key={i}>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text">{place.description}</p>
                <ul className="list-unstyled">
                  <li>
                    Entry Fees (Indian Tourists): {place.entry_fees.indian_tourists}
                  </li>
                  <li>
                    Entry Fees (Foreign Tourists): {place.entry_fees.foreign_tourists}
                  </li>
                  <li>Type: {place.type}</li>
                  <li>Timings: {place.timings}</li>
                  <li>Parking: {place.parking}</li>
                  <li>
                    Distance from City Center: {place.distance_from_city_center}
                  </li>
                  <li>Google Rating: {place.google_rating}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default Places;