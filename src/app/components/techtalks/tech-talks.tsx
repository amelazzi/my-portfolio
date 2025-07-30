import Talk from "./talk/talk";
import { talks } from "../../../data/talks.data";

function TechTalks() {
  return (
    <div className="section">
      <h1>Technical Talks</h1>
      <div className="cards-container">
        {talks.map((talk, index) => (
          <Talk key={index} talk={talk} />
        ))}
      </div>
    </div>
  );
}

export default TechTalks;
