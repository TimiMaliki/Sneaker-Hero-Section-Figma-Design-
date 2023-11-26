import React from "react";

import Nike from "../../../public/Nike.png";

const Image = () => {
  return (
    <div className="lg:-ml-0 -ml-44  lg:-mt-64  mt-44 relative">
      <h4 className="Image-layout-text">NYKEN AIR</h4>
      <div className="absolute lg:top-20 top-[75%]">
        <img src={Nike} alt="" className="image"  style={{background:"lightgray -75.646px -253.085px / 121.311% 188.627% , no-repeat"}}/>
      </div>
    </div>
  );
};

export default Image;
