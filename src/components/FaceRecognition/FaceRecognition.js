import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  console.log(box);
  return (
    <div className="center ma">
      <div className="absolute ma2">
        <img id="inputimage" alt="" src={imageUrl} width='500px' height='auto' />
        <div className="bounding_box" style={{left: box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow}}></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
