import { VolunteeringInfo } from "@/types/volunteering.types";
import Link from "next/link";
import "./volunteering-details.css";

export const VolunteeringDetails = ({
  volunteering,
}: {
  volunteering: VolunteeringInfo;
}) => {
  return (
    <div className="volunteering-details">
      <Link href={volunteering.profileLink} target="_blank">
        <h3>
          {volunteering.community} • {volunteering.role}
        </h3>
      </Link>
      <div className="volunteering-description">
        <p> {volunteering.description} </p>
        <p> {volunteering.roleDetails} </p>
        {volunteering.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
        <div className="skills">
          {volunteering.softSkills.map((skill, index) => (
            <div key={index} className="soft-skill">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
