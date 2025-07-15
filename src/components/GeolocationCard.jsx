import React, { useEffect, useState } from 'react';

function GeolocationCard() {
  const [location, setLocation] = useState({ lat: null, lon: null });

  useEffect(() => {
    const updateLocation = () => {
      navigator.geolocation.getCurrentPosition(pos => {
        setLocation({
          lat: pos.coords.latitude.toFixed(5),
          lon: pos.coords.longitude.toFixed(5),
        });
      });
    };

    updateLocation();
    const interval = setInterval(updateLocation, 10000); // Background task every 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card" data-aos="fade-up">
      <h2> Location Tracker</h2>
      {location.lat ? (
        <p>Latitude: {location.lat}<br />Longitude: {location.lon}</p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default GeolocationCard;
