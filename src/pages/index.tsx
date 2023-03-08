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





// //import '@arcgis/core/assets/esri/themes/light/main.css';
// // import Map from '@arcgis/core/Map';
// // import MapView from '@arcgis/core/views/MapView';
// // import React, { useEffect } from 'react';

// import WebScene from '@arcgis/core/webscene';
// import SceneLayer from '@arcgis/core/layers/SceneLayer';
// import Camera from '@arcgis/core/Camera';
// import SceneView from '@arcgis/core/views/SceneView';
// import { useEffect } from 'react';



// const Test: React.FC = () => {
//   useEffect(() => {
//     //200C机柜、BTM图层
//     const equpLayer = new SceneLayer({
//       // url: "http://42.193.111.151:6080/arcgis/rest/services/Hosted/atp1230/SceneServer",
//       url: 'http://42.193.111.151:6080/arcgis/rest/services/Hosted/BTM200C_merge/SceneServer',
//       popupEnabled: false,
//       id: 'atp', //点击事件的时候可以根据数据所在的图层来判断是否弹出弹框
//       spatialReference: { wkid: 3857 },
//     });

//     //创建图层并添加到map 列车图层
//     const equpLayer2 = new SceneLayer({
//       url: 'http://42.193.111.151:6080/arcgis/rest/services/Hosted/LCMX12304/SceneServer',
//       //popupEnabled: false,
//       id: 'train', //点击事件的时候可以根据数据所在的图层来判断是否弹出弹框
//       spatialReference: { wkid: 3857 },
//       opacity: 0.3,
//     });

//     //FSK连续传感器、BTM天线和DMI和速度传感器图层
//     const equpLayer3 = new SceneLayer({
//       // url: "http://42.193.111.151:6080/arcgis/rest/services/Hosted/DMI/SceneServer",
//       url: 'http://42.193.111.151:6080/arcgis/rest/services/Hosted/FBD_merge/SceneServer',
//       //popupEnabled: false,
//       id: 'dmi', //点击事件的时候可以根据数据所在的图层来判断是否弹出弹框
//       spatialReference: { wkid: 3857 },
//     });

//     //创建图层并添加到map FSK图层
//     // const equpLayer4 = new SceneLayer({
//     //   url: "http://42.193.111.151:6080/arcgis/rest/services/Hosted/FSK/SceneServer",
//     //   //popupEnabled: false,
//     //   id: "FSK",//点击事件的时候可以根据数据所在的图层来判断是否弹出弹框
//     //   spatialReference: { wkid: 3857 },
//     // });

//     //创建图层并添加到map BTM天线图层
//     // const equpLayer5 = new SceneLayer({
//     //   url: "http://42.193.111.151:6080/arcgis/rest/services/Hosted/BTMTX/SceneServer",
//     //   //popupEnabled: false,
//     //   id: "BTMTX",//点击事件的时候可以根据数据所在的图层来判断是否弹出弹框
//     //   spatialReference: { wkid: 3857 },
//     // });

//     //创建图层并添加到map BTM图层
//     // const equpLayer6 = new SceneLayer({
//     //   url: "http://42.193.111.151:6080/arcgis/rest/services/Hosted/BTM/SceneServer",
//     //   //popupEnabled: false,
//     //   id: "BTM",//点击事件的时候可以根据数据所在的图层来判断是否弹出弹框
//     //   spatialReference: { wkid: 3857 },
//     // });

//     // //创建图层并添加到map AMS图层
//     // const equpLayer7 = new SceneLayer({
//     //   url: "http://42.193.111.151:6080/arcgis/rest/services/Hosted/AMS/SceneServer",
//     //   //popupEnabled: false,
//     //   id: "AMS",//点击事件的时候可以根据数据所在的图层来判断是否弹出弹框
//     //   spatialReference: { wkid: 3857 },
//     // });

//     //创建图层并添加到map EOAS图层
//     const equpLayer8 = new SceneLayer({
//       url: 'http://42.193.111.151:6080/arcgis/rest/services/Hosted/EOAS/SceneServer',
//       //popupEnabled: false,
//       id: 'EOAS', //点击事件的时候可以根据数据所在的图层来判断是否弹出弹框
//       spatialReference: { wkid: 3857 },
//     });

//     //创建图层并添加到map DMS图层
//     const equpLayer9 = new SceneLayer({
//       url: 'http://42.193.111.151:6080/arcgis/rest/services/Hosted/DMS/SceneServer',
//       //popupEnabled: false,
//       id: 'DMS', //点击事件的时候可以根据数据所在的图层来判断是否弹出弹框
//       spatialReference: { wkid: 3857 },
//     });

//     const map = new WebScene({
//       layers: [equpLayer, equpLayer2, equpLayer3, equpLayer8, equpLayer9]
//     });

//     const camera = new Camera({
//       heading: 0.6266725884286561,
//       tilt: 83.89763248725458,
//       position: {
//         x: 14.5,
//         y: -9.5,
//         z: 8.292773921042681,
//         spatialReference: { wkid: 3857 },
//       },
//     });

//     const view = new SceneView({
//       container: 'map3DContainer',
//       map: map,
//       // extent: extent,
//       camera: camera,
//       environment: {
//         starsEnabled: true,
//         atmosphereEnabled: true,
//       },
//       constraints: {
//         // altitude: {//这是视角的高度
//         //   min: 10,
//         //   max: 20
//         // },
//         // clipDistance: {//视角看向远处的距离
//         //   near: 5,
//         //   far: 100
//         // },
//         // tilt: {//这个是视角倾斜的角度，正上方为0
//         //   max: 50
//         // }
//       },
//       // viewingMode: 'local'
//       // highlightOptions: {//这个是高亮的颜色
//       //     color: "#bd2222",
//       //     fillOpacity: 0.1
//       // }
//     });
//   })
//   return (
//     <div id="map3DContainer" style={{ width: '100%', height: '100%', border: '1px' }} />
//   );
// };

// export default Test;
