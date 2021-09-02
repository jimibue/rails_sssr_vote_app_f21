import axios from "axios";
import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Items from "./Items";

const App = () => {
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const getItems = async () => {
    // does this chucnk of code and if fails goes to catch block
    try {
      // get json from our rails server
      let res = await axios.get("/items");

      setItems(res.data);
    } catch (err) {}
  };
  const deleteItem = async (id) => {
    try {
      // delete from db
      await axios.delete(`/items/${id}`);
      // remove from ui (state)
      const newItems = items.filter((i) => i.id !== id);
      setItems(newItems);
    } catch (err) {
      alert("failed to delete");
      console.log(err);
    }
  };

  const addItem = async (item) => {
    console.log(item);

    try {
      // reset any errors if there was one
      setErrors(null);
      // add to datatbase
      let res = await axios.post("/items", item);
      console.log(res);
      //if successfull add to state
      setItems([res.data, ...items]);
    } catch (err) {
      setErrors(err.response.data.errors);
    }
  };
  return (
    <div style={{ margin: "10px", border: "3px solid black" }}>
      <h1>App</h1>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "hide form" : "new item form"}
      </button>
      <br />
      {showForm && <ItemForm addItemProp={addItem} />}
      <button onClick={getItems}>get Items</button>

      <Items items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default App;
