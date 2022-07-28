import React, { useEffect } from 'react';

export default function Map() {
  useEffect(() => {
    ymaps.ready(init);
    function init() {
      const myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 8,
      });
    }
  }, []);
  return (
    <div className="container mt-3">
      <div>
        <div id="map" />
      </div>
    </div>
  );
}
