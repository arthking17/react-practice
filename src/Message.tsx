import ListGroup from "./compenents/ListGroup";

// PascalCasing
function Message() {
  // JSX: javascript XML (will convert to js code)
  //   const name = "William";
  //   if (name) return <h1>Hello {name} !!!</h1>;
  //   else return <h1>Hello Wrld</h1>;

  let items = [
    "Dschang",
    "Douala",
    "Yaounde",
    "Bertoua",
    "Buea",
    "Limbe",
    "Loum",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <ListGroup
      items={items}
      heading="Cities"
      onSelectItem={handleSelectItem}
    ></ListGroup>
  );
}

export default Message;
