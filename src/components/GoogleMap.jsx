'use client'
import { useEffect, useState, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

// https://lonare.medium.com/how-to-integrate-google-maps-with-marker-on-my-react-next-js-website-with-address-4741d69e6324

const loader = new Loader({
  apiKey: 'AIzaSyAhFJoElywVrUza2-wzQHyVGB_uug144_s',
  // apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  version: "weekly",
});



const Map = ({ address, className='', h='400px'}) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    loader.load().then(() => {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK') {
          const mapOptions = {
            center: results[0].geometry.location,
            zoom: 16,
          };
          const newMap = new window.google.maps.Map(
            document.getElementById('map'),
            mapOptions
          );
          const marker = new window.google.maps.Marker({
            position: results[0].geometry.location,
            map: newMap,
          });
          setMap(newMap);
        }
      });
    });
  }, [address]);
  return <div id="map" className={className} style={{ height: h }}></div>;
};
export default Map;


// const Map = ({ address }) => {
//   const mapRef = useRef(null);
// const geocoder = useMemo(() => new window.google.maps.Geocoder(), []);
// useEffect(() => {

// loader.load().then(() => {
//       geocoder.geocode({ address: address }, (results, status) => {
//         if (status === "OK") {
//           const map = new window.google.maps.Map(mapRef.current, {
//             center: results[0].geometry.location,
//             zoom: 8,
//           });
// const marker = new window.google.maps.Marker({
//             map: map,
//             position: results[0].geometry.location,
//           });
//         } else {
//           console.error(`Geocode was not successful for the following reason: ${status}`);
//         }
//       });
//     });
//   }, [address, geocoder]);
// return <div style={{ height: "400px" }} ref={mapRef} />;
// }

// export default Map;