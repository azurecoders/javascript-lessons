import React from "react";

const Sidebar = ({ user }) => {
  return (
    <div>
      Here all the tabs and the user information will be shown
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default Sidebar;
