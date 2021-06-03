import { useState, useEffect } from "react";
import "./users.css";
const Users = () => {
  const [load, setLoad] = useState(false);
  const [people, setPeople] = useState([]);
  const getUsers = async () => {
    setLoad(true);
    const apiCall = await fetch("https://randomuser.me/api/?results=50");
    const users = await apiCall.json();
    setPeople(users.results);
    setLoad(false);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const list = people.map((person) => {
    const { name, picture, location, id } = person;
    return (
      <div className="wrapper" key={id.value}>
        <h3>{`${name.last} ${name.first}`}</h3>
        <img src={picture.large} alt={name.last} />
        <p>Location: {location.city}</p>
      </div>
    );
  });
  return <div>{load ? "loading..." : list}</div>;
};
export default Users;
