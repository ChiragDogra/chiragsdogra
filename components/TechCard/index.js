import Image from "next/image";
import React from "react";

const TechCard = ({ imgSource, techName }) => {
  return (
    <div
      className="overflow-hidden  rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0"
    >
      <div
        className=" relative overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-105 mob:h-48 shadow-lg"
        style={{ height: "50px" }}
      >
        <Image src={imgSource} alt={techName} layout="fill" />

        
      </div>
    </div>
  );
};

export default TechCard;
