import { Link } from "react-router-dom";
import "./index.css"
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="header">
        <Link to="/">
          <h1 className="crud">CRUD</h1>
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/">Create</Link>
          </li>
          <li>
            <Link to="/read">Read</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
