import { useState } from "react";
import Alert from "./compenents/Alert";
import Button from "./compenents/Button";
import Message from "./Message";

function App() {
  // return <div><Message/></div>

  const [alertVisility, setAlertVisibilty] = useState(false);

  return (
    <>
      {alertVisility && (
        <Alert onClose={() => setAlertVisibilty(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibilty(true)}>
        <span>Click</span>
      </Button>
    </>
  );
}

export default App;
