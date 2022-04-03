import React, { useState } from "react";

function Movies() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const submitHandle = (e) => {
    e.preventDefault();
    fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`)
      .then((res) => res.json())
      .then((value) => setData(value.Search));
  };
  return (
    <React.Fragment>
      <center>
        <h1>THIS IS MOVIES SECTION </h1>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br /> <br />
          <button className="btn btn-primary">Search</button>
        </form>
      </center>
      <br/> <br/>
      <center>
        <div className="row" style={{width:"100%",height:"25%"}} >
          {data.map((movie) => (
            <div className="col-md-3">
              <img src={movie.Poster} />
              <p> {movie.Type}</p>
            </div>
          ))}
        </div>
        </center>
 
    </React.Fragment>
  );
}

export default Movies;
