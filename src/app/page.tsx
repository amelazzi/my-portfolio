import Profile from "./components/profile/profile";
import Sidebar from "./components/sidebar/sidebar";

export default function Index() {
  return (
    <div className="container">
      <Profile />
      <div className="portfolio-container">
        <Sidebar />
        <main></main>
      </div>
    </div>
  );
}
