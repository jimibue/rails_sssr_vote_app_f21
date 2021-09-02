import React from "react";
import Item from "./Item";

const Items = ({ items, deleteItem, updateItem, like }) => {
  return (
    <div style={{ margin: "10px", border: "3px solid red" }}>
      <h1>Items</h1>
      {items.map((item) => (
        <Item
          like={like}
          updateItem={updateItem}
          deleteItem={deleteItem}
          key={item.id}
          {...item}
        />
        // <Item key={item.id} id={item.id} likes={item.likes}/>
      ))}
    </div>
  );
};

export default Items;
