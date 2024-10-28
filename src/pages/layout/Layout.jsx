import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="layout">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
