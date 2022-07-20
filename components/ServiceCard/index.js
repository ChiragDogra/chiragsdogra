import React from "react";

const ServiceCard = ({ name, description, validation }) => {
  return (
    <div className="w-full p-4 mob:p-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105 cursor-pointer shadow-lg" onClick={validation}>
      <h1 className="text-2xl">• {name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-l">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "}
      </p>
    </div>
  );
};

export default ServiceCard;
