// import React from 'react';
import { useState } from "react";
import { guns } from "../../../../test";
const ArrayExample = () => {
  const [data, setData] = useState(guns);
  //   const handelRemove = () =>{
  //     setData([])
  //   }
  const handelChange =(value) =>{
    console.log(value)
  }
    const handelRemove = (id) =>{
      const filterData = data.filter(d => d.id !== id)
      setData(filterData)
    }
//   console.log(data);
  return (
    <div>
      <div>
        {data &&
          data.map((singleData) => (
            <>
              <p>{singleData.name}</p>
              <button onClick={() =>handelRemove(singleData.id)} className="btn btn-primary">Remove</button>
            </>
          ))}
      </div>
      <button onClick={() => setData([])} className="btn btn-error">
        All Remove
      </button>
      <input type="text" onChange={(e) => handelChange(e.target.value)} />
    </div>
  );
};

export default ArrayExample;
