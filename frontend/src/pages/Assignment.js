import React, { useState } from "react";
import "./Assignment.css";

const Assignment = () => {
  const [value, setValue] = useState([]);

  React.useEffect(() => {
    localStorage.setItem("quentinTarantino", value);
  }, [value]);

  const onChange = (event) => setValue(event.target.value);

  // our array
  var movies = [
    "Reservoir Dogs",
    "Pulp Fiction",
    "Jackie Brown",
    "Kill Bill",
    "Death Proof",
    "Inglourious Basterds",
  ];

  // storing our array as a string
  localStorage.setItem("quentinTarantino", JSON.stringify(movies));

  // retrieving our data and converting it back into an array
  var retrievedData = localStorage.getItem("quentinTarantino");
  var movies2 = JSON.parse(retrievedData);

  //making sure it still is an array
  //alert(movies2.length);
  console.log(movies2.length);

  const add = () => {
    setValue([...value]);
  };

  return (
    <div className="container">
      <input type="text" value={value} onChange={onChange} />
      <button onClick={add}></button>
    </div>
  );

  // <div className="container">
  //   <input value={value} type="text" onChange={onChange} />

  //   <p>{value}</p>
  // </div>
};

export default Assignment;
