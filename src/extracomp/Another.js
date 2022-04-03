import React, { useEffect, useState } from "react";

function Another() {
  const [user, setUser] = useState([]);

  useEffect(async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    let resData = await data.json();
    setUser(resData);
  }, []);
 
  const deletHandler = (id) => {
    setUser(user.filter((item) => item.id !== id));
  };
  return (
    <React.Fragment>
      <center>
       { user.length > 0 ?<table>
          <thead>
            <tr>
              <th>name </th>
              <th> title</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { user.map((item, id) => (
              <tr key={id}>
                <td className="text-primary">{item.name}</td>
                <td className="text-info">{item.email}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deletHandler(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>:<h4>NO DATA FOUND PLEASE RELOAD THE PAGE </h4>}
      </center>
    </React.Fragment>
  );
}

export default Another;
