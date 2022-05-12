import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";

export default function Navigation() {
  return (
    <>
      <nav className="navigation">
        <Link className="logo-link" to="/">
          <CrownLogo className="logo"></CrownLogo>
        </Link>
        <ul className="nav-links-container">
          <li className="nav-link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="nav-link">
            <Link to="">Test</Link>
          </li>
          <li className="nav-link">
            <Link to="">Test 2</Link>
          </li>
          <li className="nav-link">
            <Link to="/auth">Sign in</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
