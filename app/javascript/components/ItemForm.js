import React, { useState } from "react";

const ItemForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");
  const [category, setCategory] = useState(
    props.category ? props.category : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItemProp({ name, category });
    setName("");
  };
  return (
    <div style={{ margin: "10px", border: "3px solid pink" }}>
      <h1>Item Form</h1>
      <form onSubmit={handleSubmit}>
        <p>name</p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p>category</p>
        <input
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <button>{props.id ? "update" : "add"}</button>
      </form>
    </div>
  );
};

export default ItemForm;
