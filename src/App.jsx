import { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  const [toggle, setToggle] = useState(false);

  function handleIcre() {
    if (count < 10) {
      setCount(count + 1);
    }
  }

  function handleDcre() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  let style = {
    backgroundColor: "red",
    color: "white",
    width: "100px",
    height: "100px",
  };
  return (
      <div onClick={() => setToggle(!toggle)}
      style={{ backgroundColor: toggle ? "blue" : "green" }}> change bg <br/>
   
      <button onClick={handleIcre} style={style}>
        incre
      </button>
      <p>{count}</p>
      <button onClick={handleDcre} style={style}>
        Dcre
      </button>

        <Button name = "LOG in" bgcolor = 'red'/>
        <Button name = "LOG out" bgcolor = 'blue'/>
        <Button name = "add to  card "bgcolor = 'yellow'/>
        <Button name = "payment " bgcolor="voilet"/>
     
    
      </div>
  );
}

export default App;
