import { BrowserRouter, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-home">
        <h1>expense-App</h1>
      </div>
      <div className="header-menu">
        <BrowserRouter>
          <Link to="/">Hjem</Link>
          <Link to="/">Omm Os</Link>
          <Link to="/">Kontakt</Link>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Header;
