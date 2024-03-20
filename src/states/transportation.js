import React from 'react';

const Transportation = ({ transportation }) => {
    return (
        <div className='row'>
            {transportation.map((item, index) => (
                <div className="col-md-4" key={index}>
                    <h3>{item.name}</h3>
                    <div>Type: {item.type}</div>
                    <div>Code: {item.code}</div>
                    <div>Location: {item.location}</div>
                    <div>Distance from City Center: {item.distance_from_city_center}</div>
                    <div>Contact: {item.contact}</div>
                    <a href={item.detailed_page}>Detailed Page</a>
                </div>
            ))}
        </div>
    );
};

export default Transportation;
