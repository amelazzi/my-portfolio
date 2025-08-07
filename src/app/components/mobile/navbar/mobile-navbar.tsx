import MenuIcon from "@mui/icons-material/Menu";
import "./mobile-navbar.css";
import { MouseEventHandler } from "react";

export const Navbar = ({
  onMenuClicked,
}: {
  onMenuClicked: MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <div className="navbar-container">
      <div className="nav-icon" onClick={onMenuClicked}>
        <MenuIcon />
      </div>
      <div className="name-container">
        <h3> {"</>"}</h3>
        <h4> Amel.dev</h4>
      </div>
    </div>
  );
};
