import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Admin = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:3000/users");

    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Admin;
