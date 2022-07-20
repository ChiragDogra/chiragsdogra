import React from "react";
import Button from "../Button";

import data from "../../yourData";

const Socials = ({ className }) => {
  return (
    <div className={`${className} flex`}>
      {data.profiles.map((profile, index) => (
        <Button key={index} onClick={() => window.open(profile.link)}>
          {profile.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
