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
    <div className="overflow-hidden  rounded-lg p-4 mob:p-2 laptop:p-0 mob:p-0 first:ml-0 transition-all hover:scale-105 ease-out duration-300 shadow-xl  mob:h-48  relative mob: mt-2" style={{ height: "580px" }}>
      <div>
        <Image src={img} alt="mountains" width={900} height={520} />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {name ? name : "Project"}
          </div>
          <p className="text-gray-700 text-base overflow-hidden " >
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
        <div className="px-6 pt-4 pb-2 absolute bottom-0 left-0">
          <GitHubIcon
            sx={{ fontSize: "40px" }}
            className="mr-4 mb-4 cursor-pointer transition-all hover:scale-105 ease-out duration-300 "
            onClick={toGithub}
            alt="Github Link"
          />
          <DevicesIcon
            sx={{ fontSize: "40px" }}
            className="mr-4 mb-4 cursor-pointer transition-all hover:scale-105 ease-out duration-300 "
            onClick={toHosted}
            alt="HostedLink"  
          />
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
