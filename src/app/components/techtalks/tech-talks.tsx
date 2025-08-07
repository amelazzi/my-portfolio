import TalkCard from "./talk-card/talk-card";
import { talks } from "../../../data/talks.data";

function TechTalks() {
  return (
    <div id="tech-talks" className="section">
      <h1>Technical Talks</h1>
      <div className="cards-container">
        {talks.map((talk, index) => (
          <TalkCard key={index} talk={talk} />
        ))}
      </div>
    </div>
  );
}

export default TechTalks;
