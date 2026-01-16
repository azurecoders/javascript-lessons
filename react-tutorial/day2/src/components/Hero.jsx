import React from "react";

const Hero = ({ config }) => {
  return (
    <div className="container mx-auto py-4">
      Welcome {config.loggedin_user_name} to {config.app_name}
    </div>
  );
};

export default Hero;
