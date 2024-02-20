// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // const loadData = async () => {
    //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //   const data = await res.json();
    //   setData(data);

    const loadData = async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");    
        setData(data);

    };
    loadData();
  }, []);
  console.log(data);
  return (
    <div>
      <p>{data.length}</p>
      {data.map((singleData) => (
        <p>{singleData.title}</p>
      ))}
    </div>
  );
};

export default UseEffectExample;
