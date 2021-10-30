import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  ZoomableGroup,
  Marker,
} from 'react-simple-maps';

function GeoLocationMap({ data }) {
  const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

  return (
    <ComposableMap
    // projection='geoAzimuthalEqualArea'
    // projectionConfig={{
    //   scale: 195,
    // }}
    >
      <ZoomableGroup center={[-3, 13]} zoom={1.25} disablePanning>
        <Graticule stroke='#EAEAEC' />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill='#d6d6d6'
                stroke='#EAEAEC'
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[-3.7492, 40.4637]}>
          <>
            <circle r={5} fill='#525252' />
            <text x='-8' y='-12' textAnchor='middle' fill='#000' fontSize='14'>
              Spain
            </text>
          </>
        </Marker>
        <Marker coordinates={[-101, 53]} fill='#777' fontSize='14'>
          <text x='-8' y='-12' textAnchor='middle' fill='#000' fontSize='14'>
            Canada
          </text>
          <circle r={5} fill='#525252' />
        </Marker>
        <Marker coordinates={[-102, 38]} fill='#777' fontSize='14'>
          <circle r={5} fill='#525252' />
          <text x='-8' y='-12' textAnchor='middle' fill='#000' fontSize='14'>
            USA
          </text>
        </Marker>
        <Marker coordinates={[-103, 25]} fill='#777' fontSize='14'>
          <circle r={5} fill='#525252' />
          <text x='-8' y='-12' textAnchor='middle' fill='#000' fontSize='14'>
            Mexico
          </text>
        </Marker>
        {data.map((item) => (
          <Marker
            key={item.longitude}
            coordinates={[item.longitude, item.latitude]}
            fill='#777'
          >
            <circle r={2} fill='#995252' />
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
}

export default GeoLocationMap;
