import React from "react";

const Skills = ({ skills }) => {
  return (
    <div
      className="w-full p-4 mob:p-2 rounded-lg transition-all ease-out duration-300 hover:bg-slate-50 hover:scale-105 cursor-pointer shadow-lg"
    >
      <h1 className="text-2xl">• {skills}</h1>
    </div>
  );
};

// • ⁜ ⁍ ‣ ⁙ ৹ →

export default Skills;
