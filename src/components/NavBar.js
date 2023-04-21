import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{
    <>
      <a href = '#'>home</a>
      <a href = '#'>about</a>
      <a href = '#'>projects</a>
    </>
    }</nav>;
}

export default NavBar;
