import React, { useState } from "react";

const ItemForm = (props) => {
  const [name, setName] = useState(props.name ? props.name : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItemProp({ name });
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
        <button>{props.id ? "update" : "add"}</button>
      </form>
    </div>
  );
};

export default ItemForm;
