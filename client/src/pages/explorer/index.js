import ItemList from "components/explorer/items";

const Explorer = () => {
  const items = [
    { type: "folder", name: "This is a folder" },
    { type: "file", name: "program", extension: ".exe" },
    { type: "file", name: "archive", extension: ".zip" },
  ];

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default Explorer;
