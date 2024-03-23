const Places = ({ data }) => {
  return (
    <>
      <div className="row">
        {data.map((place, i) => (
          <div className="col-md-3" key={i}>
            <div className="card mb-3">
              <div className="card-body">
                {place.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="places-top-images"
                  />
                ))}
                <h5 className="card-title">{place.name}</h5>
                <p className="card-text">{place.description}</p>
                <ul className="list-unstyled places-small-info">
                  <li>
                    <span><i class="fas fa-rupee-sign"></i> Entry Fees (Indian):</span>{" "}
                    {place.entry_fees.indian_tourists}
                  </li>
                  <li>
                    <span><i class="fas fa-dollar-sign"></i> Entry Fees (Foreign):</span>{" "}
                    {place.entry_fees.foreign_tourists}
                  </li>
                  <li>
                    <span> <i class="far fa-compass"></i> Type: </span> {place.type}
                  </li>
                  <li>
                    <span><i class="far fa-clock"></i> Timings: </span> {place.timings}
                  </li>
                  <li>
                    <span><i class="fas fa-car-side"></i> Parking: </span> {place.parking}
                  </li>
                  <li>
                    <span><i class="fas fa-map-marker-alt"></i> Distance from City Center: </span>{" "}
                    {place.distance_from_city_center}
                  </li>
                  <li>
                    <span><i class="far fa-star"></i>Google Rating: </span> {place.google_rating}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Places;
