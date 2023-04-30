import { data } from "../../../data.js";
import { useState } from "react";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const clearPeople = () => {
    setPeople([]);
  };
  const removePerson = (index) => {
    setPeople(people.slice(0, index).concat(people.slice(index + 1)));
  };

  return (
    <div>
      <h2>
        {people.map((person, index) => {
          return (
            <div key={index}>
              <h4>{person.name}</h4>
              <button type="button" onClick={() => removePerson(index)}>
                remove
              </button>
            </div>
          );
        })}
      </h2>
      <button type="button" className="btn" onClick={clearPeople}>
        Clear all
      </button>
    </div>
  );
};

export default UseStateArray;
