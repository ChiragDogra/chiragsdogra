import React from "react";
import Button from "../Button";
const Header = ({
  handleWorkScroll,
  handleSkillScroll,
  handleContactScroll,
}) => {
  return (
    <div className="mt-6 flex items-center justify-between sticky top-0 z-10 bg-white">
      <h1 className="font-bold mob:p-2 laptop:p-0">Chirag Dogra</h1>
      <div>
        <Button onClick={handleWorkScroll}>Projects</Button>
        <Button onClick={handleSkillScroll}>Skills</Button>
        <Button onClick={handleContactScroll}>Contact</Button>
      </div>
    </div>
  );
};

export default Header;
