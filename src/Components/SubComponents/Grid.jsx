import React from "react";
import BannerText from "./BannerText";
import Image from "./Image";

const Grid = () => {
  return (
    <div className="  lg:flex justify-between p-72 w-full h-full">
      <BannerText />
      <Image />
    </div>
  );
};

export default Grid;
