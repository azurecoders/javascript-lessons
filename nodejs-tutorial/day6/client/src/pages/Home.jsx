import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserInformation = async () => {
      const apiResponse = await fetch("http://localhost:3001/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await apiResponse.json();

      setUser(data.data);
      console.log(data);
    };

    fetchUserInformation();
  }, []);
  return (
    <div className="container mx-auto text-4xl font-semibold py-20">
      Welcome {user.name} - {user.email}
    </div>
  );
};

export default Home;
