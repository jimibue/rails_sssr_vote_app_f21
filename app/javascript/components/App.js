import axios from "axios";
import React, { useState } from "react";
import Items from "./Items";

const App = () => {
  const getItems = async () => {
    try {
      // does this chucnk of code and if fails goes to catch block
      let res = await axios.get("/items");
      console.log(res);
      console.log(res.data);
    } catch (err) {}
  };
  return (
    <div>
      <h1>App</h1>
      <button onClick={getItems}>get Items</button>
      <Items />
    </div>
  );
};

export default App;
