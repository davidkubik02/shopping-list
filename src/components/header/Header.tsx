import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="main-title" to={"/shopping-list"}>
        <h1>Můj košík</h1>
      </Link>
    </header>
  );
}

export default Header;
