import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    async function getUser() {
      const response = await fetch(url)
      const json = await response.json()
      console.log(json)
      setUser(json)

    }
    getUser()
  }, [])

  console.log(user)
  if (!user) {
    return <h2>loading...</h2>
  }

  return <>
    <img width="250px" src={user.avatar_url} alt={user.login}></img>
    <h2>{user.login} </h2>
    <p>works at {user.company}</p>
    <p>{user.bio}</p>
  </>;
};
export default MultipleReturnsFetchData;
