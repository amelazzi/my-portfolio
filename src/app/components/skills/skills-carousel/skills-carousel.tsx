import { skill } from "@/types/skill.types";
import "./skills-carousel.css";
import Image from "next/image";

export const SkillsCarousel = ({
  skills,
  cardSize = 100,
}: {
  skills: skill[];
  cardSize?: number;
}) => {
  const imgSize = cardSize === 100 ? 60 : 35;
  return (
    <div className="skills-carousel">
      <div className="skills-track">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name"> {skill.name} </div>
            <div
              className="skill-logo"
              style={{
                minWidth: `${cardSize}px`,
                maxWidth: `${cardSize}px`,
                minHeight: `${cardSize}px`,
                maxHeight: `${cardSize}px`,
              }}
            >
              <Image
                src={`/icons/${skill.logo}`}
                width={imgSize}
                height={imgSize}
                alt={`${skill.name} icon`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
