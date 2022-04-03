import React from "react";
import Home from "./extracomp/Home"

function Routing() {
  const Routing = [
    {
      title: "Home",
      path: "/Home",
      Component: Home,
    },

    {
      title: "About",
      path: "/About",
      Component: About,
    },
    {
      title: "Movies",
      path: "/Movies",
      Component: Movies,
    },
  ];

  return <div>Routing</div>;
}

export default Routing;