import React, { useState } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Testing from "./extracomp/Testing";
import Movies from "./extracomp/Movies";
import Home from "./extracomp/Home";
import About from "./extracomp/About";
import Another from "./extracomp/Another";


function App(props) {
  const [word, setWord] = useState("parent");
  return (
    <div className="App">
      <div style={{ marginTop: "10%", textAlign: "center" }}>
        <h2>This is {word} </h2>
        <Home changeWord={(word) => setWord(word)} />

        {/* <About/> */}
        <Another/>
      </div>
    </div>
  );
}

export default App;
