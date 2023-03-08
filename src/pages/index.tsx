import '@arcgis/core/assets/esri/themes/light/main.css';
import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import { useEffect } from 'react';

const Test: React.FC = () => {
  useEffect(() => {
    const map = new Map({
      basemap: "osm",
    });
    const view = new SceneView({
      container: "map3DContainer",
      map,
      zoom: 13,
      center: [118.75069, 31.94153]
    })
  })
  return (
    <div id="map3DContainer" style={{ width: '100%', height: '100%', border: '1px' }} />
  );
};

export default Test;
