import React, { useState } from "react";
import ItemForm from "./ItemForm";
const Item = (props) => {
  // remember the {...item} in our Items component we can now grab these from props.
  const {
    name,
    description,
    id,
    category,
    likes,
    deleteItem,
    updateItem,
    like,
  } = props;
  const [showForm, setShowForm] = useState(false);

  return (
    <div style={{ margin: "10px", border: "3px solid orange" }}>
      <h1>
        {id}- {name}
      </h1>
      <p>likes: {likes}</p>
      <p>{description}</p>
      <button onClick={() => deleteItem(id)}>delete me</button>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "cancel edit" : "edit"}
      </button>
      {showForm && (
        <ItemForm
          updateItem={updateItem}
          id={id}
          category={category}
          name={name}
          description={description}
        />
      )}
      <button onClick={() => like(id)}>like</button>
    </div>
  );
};
export default Item;
