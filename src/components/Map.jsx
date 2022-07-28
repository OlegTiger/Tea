import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Map({allTea}) {

    useEffect(() => {
    ymaps.ready(init);

    function init() {
      const myMap = new ymaps.Map(
        'map',
        {
          center: [55.83, 90.11],
          zoom: 2,
        },
        {
          searchControlProvider: 'yandex#search',
        },
      );


      for(let i=0; i<allTea.length; i++){
        const myPlacemark = new ymaps.Placemark([allTea[i].latitude, allTea[i].longitude], {
          // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
          balloonContentHeader: `${allTea[i].tea_name}`,
          balloonContentBody: `<p>${allTea[i].place}</p> <img style="width: 100px" src=${allTea[i].img}>`,
          // balloonContentFooter: `<Link to='http://localhost:3000/tea/${allTea[i].id}'>Ссылка на чай<Link/>`,
          balloonContentFooter: `<a href='http://localhost:3000/tea/${allTea[i].id}'>Ссылка на чай<a/>`,
          hintContent: 'Хинт метки',
        });
  
        myMap.geoObjects.add(myPlacemark);
  
        // // Открываем балун на карте (без привязки к геообъекту).
        // myMap.balloon.open([51.85, 38.37], 'Содержимое балуна', {
        //   // Опция: не показываем кнопку закрытия.
        //   closeButton: true,
        // });
  
        // // Показываем хинт на карте (без привязки к геообъекту).
        // myMap.hint.open(myMap.getCenter(), 'Одинокий хинт без метки', {
        //   // Опция: задержка перед открытием.
          // openTimeout: 1500,
        // });

      }

    }
  }, []);
  return (
    <div className="container mt-3">
      { console.log("allTea--->", allTea)}
      <div>
        <div id="map" />
      </div>
    </div>
  );
}
