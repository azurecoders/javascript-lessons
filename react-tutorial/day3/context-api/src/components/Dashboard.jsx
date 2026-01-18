import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = ({ user }) => {
  return (
    <div>
      This is the dasbhoard of {user.name}, you will see the user information in
      the sidebar
      <Sidebar user={user} />
    </div>
  );
};

export default Dashboard;
