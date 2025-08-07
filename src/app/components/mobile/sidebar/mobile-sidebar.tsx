import { navItems } from "@/data/sidebar.data";
import "./mobile-sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { useClickOutside } from "@/app/hooks/useClickOutside";

export const MobileSidebar = ({
  open,
  setOpenSidebar,
}: {
  open: Boolean;
  setOpenSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
  const [active, setActive] = useState("profile");
  const sidebarRef = useRef<HTMLDivElement>(null);

  useClickOutside(sidebarRef, () => {
    if (open) setOpenSidebar(false);
  });

  if (!open) return null;
  return (
    <>
      {open && (
        <div className="sidebar-container mobile" ref={sidebarRef}>
          <div>
            <div className="sidebar-header">
              <div className="nav-icon" onClick={() => setOpenSidebar(false)}>
                <CloseIcon />
              </div>
              <div>
                <h4> Amel.dev</h4>
              </div>
            </div>
            <hr className="h-divider" />
          </div>
          <nav className="mobile-nav">
            {navItems.map(({ id, href, label }) => {
              const isActive = active === id;
              return (
                <a
                  className={`link-item ${isActive ? "active" : ""}`}
                  key={href}
                  href={`#${id}`}
                  onClick={() => setActive(id)}
                >
                  {isActive && "< "}
                  {label.toUpperCase()}
                  {isActive && " />"}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
};
