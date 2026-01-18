import React from "react";

const PersonalData = ({ user }) => {
  return (
    <div>
      This is the personal data tab, here all the user information will be shown
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default PersonalData;
