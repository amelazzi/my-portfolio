import { Dates } from "./project.types";

export type VolunteeringInfo = {
  community: string;
  logo: string;
  role: string;
  dates: Dates;
  description: string;
  roleDetails: string;
  achievements: string[];
  softSkills: string[];
  profileLink: string;
};
