import { useState } from "react";
import { data2 } from "../../../data";

const UseStateObject = () => {
  const [personID, setPersonID] = useState(0);
  const nextPerson = () => personID === data2.length - 1 ? 0 : personID + 1
  const newPerson = () => {setPersonID(nextPerson)}
  console.log(personID)
  console.log(nextPerson())

  return (
    <div>
      <h2>Name: {data2[personID].name}</h2>
      <h2>Age: {data2[personID].age}</h2>
      <h2>Hobby: {data2[personID].hobby}</h2>
      <button type="button" className="btn" onClick={newPerson}>Show {data2[nextPerson()].name}</button>
    </div>
  );
};

export default UseStateObject;
