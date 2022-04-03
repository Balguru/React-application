import React, { useEffect, useState } from "react";

function Testing() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <React.Fragment>
      <center>
        <h1> images data</h1>
     
<div className="col-md-8">
      <table class="table">
        <thead>
          <tr>
            <th>S No</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,id) => (
            <tr key={item.id}>
              <td >{item.id}</td>
              <td>{item.title}</td>
              <td><button>UpDate</button>  &nbsp; <button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </center>
    </React.Fragment>
  );
}

export default Testing;
