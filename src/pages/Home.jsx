import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import { CardContainer } from '../pages/Layout';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users", {
        params: { per_page: 9 } // 페이지당 9명의 사용자 요청
      })
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      <Link to="/menu">메뉴로 이동</Link>
      <CardContainer>
        {users.map((user) => (
          <Card
            key={user.id}
            id={user.id}
            avatar={user.avatar}
            name={`${user.first_name} ${user.last_name}`}
          />
        ))}
      </CardContainer>
    </>
  );
};

export default Home;
