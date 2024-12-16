import { Menu } from "lucide-react";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  // const user = true;
  const { currentUser } = useContext(AuthContext);
  console.log("🚀 ~ Navbar ~ currentUser:", currentUser);
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
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/public/user.png"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">SignIn</Link>
            <Link to="/register" className="register">
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
