import { useState, useEffect } from "react";

const url = "https://api.github.com/users";


const Render = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)
      setUsers(json)
    };

    fetchData()
  }, []);

  console.log(users);

  const UserList = () => users.map(user => {
    return <ul className="users">
      <img src={user.avatar_url} style={{width: "50px"}}></img>
      <li>{user.login} <a href={user.html_url}>Profile</a></li>
      
      </ul>
  })

  return (
    <>
      <h2>my fetch data example</h2>
      <h3>Github Users</h3>
      <UserList />
    </>
  );
};


export default Render;
