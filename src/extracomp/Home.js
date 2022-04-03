import React, { useState } from "react";
import About from "./About";

function Home(props) {
  const [name, setName] = useState("this is About component");
  return (
    <div>
      <button onClick={() => props.changeWord("balu")}>
        Chenge data form Child 
      </button>
      <h2> {name}</h2>
      <About changeName={(name) => setName(name)} />
    </div>
  );
}

export default Home;
