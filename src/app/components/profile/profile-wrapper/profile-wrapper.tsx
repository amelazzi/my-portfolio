import Profile from "../profile";
import "./profile-wrapper.css";
import { usePathname } from "next/navigation";

export const ProfileWrapper = () => {
  const pathname = usePathname();
  return (
    <div
      className={
        `${pathname !== "/about" ? "default " : ""}` + "profile-container"
      }
    >
      <Profile />
    </div>
  );
};
