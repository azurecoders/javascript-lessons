import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserDetails = () => {
  const { slug } = useParams();
  const [user, setUser] = useState({});

  const fetchUserDetails = async () => {
    const { data } = await axios.get(`http://localhost:3000/users/${slug}`);

    setUser(data);
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <div>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
    </div>
  );
};

export default UserDetails;
