import Profile from "../profile";
import "./profile-wrapper.scss";
import { usePathname } from "next/navigation";

export const ProfileWrapper = () => {
  const pathname = usePathname();
  const isDefault = pathname !== "/about" && pathname !== "/";

  return (
    <div
      id="profile"
      className={`profile-container ${isDefault ? "default-wrapper" : ""}`}
    >
      <Profile />
    </div>
  );
};
