import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 4.685925,
  lng: -74.1134489
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'crabRecycling',
    googleMapsApiKey: "AIzaSyBVUQpocJ_3zqvjQAXpwQ7I7dJCa-pfpWQ"
  })


  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={ {lat: 4.685925, lng: -74.1134489 } }
        zoom={4}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={{ lat: 4.685925, lng: -74.1134489 }} />
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)
