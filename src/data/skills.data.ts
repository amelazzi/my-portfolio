import { skill, skillsType } from "@/types/skill.types";

export const skills: Record<skillsType, skill[]> = {
  [skillsType.Backend]: [
    { name: "Node.js", logo: "nodejs-logo.svg" },
    { name: "Express.js", logo: "express-logo.svg" },
    { name: "Python", logo: "python-logo.svg" },
  ],
  [skillsType.Databases]: [
    { name: "PostgreSQL", logo: "postgresql-logo.svg" },
    { name: "MySQL", logo: "mysql-logo.svg" },
    { name: "Oracle", logo: "oracle-logo.svg" },
  ],
  [skillsType.Frontend]: [
    { name: "Tailwind", logo: "tailwind-logo.svg" },
    { name: "NextJS", logo: "next-logo.svg" },
    { name: "React", logo: "reactjs-logo.svg" },
    { name: "TypeScript", logo: "ts-logo.svg" },
    { name: "JavaScript", logo: "js-logo.svg" },
  ],
  [skillsType.Tools]: [
    { name: "Git", logo: "git-logo.svg" },
    { name: "Docker", logo: "docker-logo.svg" },
    { name: "AWS", logo: "aws-logo.svg" },
  ],
  [skillsType.Others]: [
    { name: "RESTful APIs", logo: "api-logo.svg" },
    { name: "GraphQL", logo: "graph-logo.svg" },
    { name: "Figma", logo: "figma-logo.svg" },
  ],
};
