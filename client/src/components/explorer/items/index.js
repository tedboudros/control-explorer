import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  const getKey = (item) => `${item.type}-${item.name}`;

  return (
    <div>
      {items.map((item) => {
        return <Item item={item} key={getKey(item)} />;
      })}
    </div>
  );
};

export default ItemList;
