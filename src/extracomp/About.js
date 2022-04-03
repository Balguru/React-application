import React, { useEffect, useState } from "react";

function About() {
  const [userData, setUserData] = useState([]);

//   useEffect(async () => {
//     const data = await fetch("https://jsonplaceholder.typicode.com/photos");
//     let responseData = await data.json();
//     setUserData(responseData);
//   }, []);

  const deletHandler = (id) => {
    setUserData(userData.filter((item) => item.id !== id));
  };
  return (
    <React.Fragment>
      {userData.map((item) => (
        <div>
          <h1>{item.title}</h1>
          <img src={item.url} />
          <button onClick={() => deletHandler(item.id)}>delete</button>
        </div>
      ))}
    </React.Fragment>
  );
}

export default About;
