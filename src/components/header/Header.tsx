import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  return (
    <header>
      <h1 className="main-title">Můj košík</h1>
      {location.pathname !== "/shoping-lists" ? (
        <Link to={"/shoping-lists"}>Nákupní seznamy</Link>
      ) : undefined}
    </header>
  );
}

export default Header;
