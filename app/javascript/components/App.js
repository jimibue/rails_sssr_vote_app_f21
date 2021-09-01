import axios from "axios";
import React, { useState } from "react";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    // does this chucnk of code and if fails goes to catch block
    try {
      // get json from our rails server
      let res = await axios.get("/items");

      setItems(res.data);
    } catch (err) {}
  };
  return (
    <div style={{ margin: "10px", border: "3px solid black" }}>
      <h1>App</h1>
      <button onClick={getItems}>get Items</button>

      <Items items={items} />
    </div>
  );
};

export default App;
