import React from "react";
import PersonalData from "./PersonalData";

const Profile = ({ user }) => {
  return (
    <div>
      <p className="text-xl">
        This is the profile page, there could be multiple tabs
      </p>
      <PersonalData user={user} />
    </div>
  );
};

export default Profile;
