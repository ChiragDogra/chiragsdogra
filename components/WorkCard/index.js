import Image from "next/image";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import DevicesIcon from "@mui/icons-material/Devices";

const WorkCard = ({
  img,
  name,
  description,
  toGithub,
  toHosted,
  technologies,
}) => {
  return (
    <div className="overflow-hidden  rounded-lg p-4 mob:p-2 laptop:p-4 first:ml-0 hover:scale-105 ease-out duration-300">
      <div
        className="rounded-lg transition-all   mob:h-48 shadow-lg"
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
        <div className="px-6 pt-4 pb-2 ">
          <GitHubIcon
            sx={{ fontSize: "40px" }}
            className="hover:scale-105 mr-2 ml-2 mb-2 cursor-pointer"
            onClick={toGithub}
            alt="Github Link"
          />
          <DevicesIcon
            sx={{ fontSize: "40px" }}
            className="hover:scale-105 mr-2 ml-2 mb-2 cursor-pointer"
            onClick={toHosted}
            alt="HostedLink"  
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
