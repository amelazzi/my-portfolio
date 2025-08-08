import { navItems } from "@/data/sidebar.data";
import "./mobile-sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction } from "react";

export const MobileSidebar = ({
  open,
  setOpenSidebar,
}: {
  open: Boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      {open && (
        <div className="sidebar-container mobile">
          <div>
            <div className="sidebar-header">
              <div>
                <h4> Amel.dev</h4>
              </div>
              <div className="nav-icon" onClick={() => setOpenSidebar(false)}>
                <CloseIcon />
              </div>
            </div>
            <hr className="h-divider" />
          </div>
          <nav className="mobile-nav">
            {navItems.map(({ id, href, label }) => {
              return (
                <a
                  className="link-item"
                  key={href}
                  href={`#${id}`}
                  onClick={() => setOpenSidebar(false)}
                >
                  {label.toUpperCase()}
                </a>
              );
            })}
            <hr className="h-divider" />
          </nav>
        </div>
      )}
    </>
  );
};
