import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export const Home = () => {
  let params = useParams();
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={()=>setCount(count+1)}></button>
      <p>Hi {params.username}</p>
      Home
    </div>
  );
};
