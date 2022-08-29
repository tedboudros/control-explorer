import React from "react";

const Item = ({ item }) => {
  const renderContent = () => {
    if (item.type === "folder") {
      return <div>{item.name}</div>;
    } else {
      return <div>{item.name + item.extension}</div>;
    }
  };

  return <div>{renderContent()}</div>;
};

export default Item;
