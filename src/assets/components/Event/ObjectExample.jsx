// import React from 'react';

import { useState } from "react";

const ObjectExample = () => {
  const [value, setValue] = useState({
    name: "Mintu Siker",
    age: "22",
    hobby: "football",
  });
  const handelShowMe = () => {
    setValue({
      name: "Hasan",
      age: "33",
      hobby: "Cricake",
    });
  };
  return (
    <div>
      <h2>{value.name}</h2>
      <p>{value.age}</p>
      <p>{value.hobby}</p>
      <button className="btn btn-warning" onClick={handelShowMe}>Show Me</button>
    </div>
  );
};

export default ObjectExample;
