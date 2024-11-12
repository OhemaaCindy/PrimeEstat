import { Menu } from "lucide-react";
import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <nav>
      <div className="left">
        <Link to="" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>PrimeEstate</span>
        </Link>

        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/">SignIn</Link>
            <Link to="/" className="register">
              SignUp
            </Link>
          </>
        )}

        <div
          className="menuIcon"
          style={{ cursor: "pointer" }}
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu
            style={{
              color: "white",
              backgroundColor: "black",
              padding: "3px",
              borderRadius: "50%",
            }}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Home</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/">SignIn</Link>
          <Link to="/"> SignUp</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
