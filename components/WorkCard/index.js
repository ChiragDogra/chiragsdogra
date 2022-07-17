import Image from "next/image";
import React from "react";

const WorkCard = ({ img, name, description, onClick, technologies }) => {
  return (
    <div
      className="overflow-hidden cursor-pointer rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0"
      onClick={onClick}
    >
      <div
        className="overflow-hidden rounded-lg transition-all ease-out duration-300 hover:scale-105 mob:h-48 shadow-lg"
        style={{ height: "600px" }}
      >
        <Image src={img} alt="mountains" width={900} height={520} />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {name ? name : "Project"}
          </div>
          <p className="text-gray-700 text-base">
            {description ? description : "This is my project"}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
