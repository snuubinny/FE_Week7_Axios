import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios
      .get(`https://reqres.in/api/users/${userId}`)
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  if (!user) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>User Info</h1>
      <img src={user.avatar} />
      <p>Name: {`${user.first_name} ${user.last_name}`}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default User;
