import { z } from "zod";
import { ProjectDatesSchema } from "@/schemas/projectDates.schema";

export type Stack = {
  roleStack: string[];
  projectStack: string[];
};

export type ProjectStats = {
  nbrDownloads: string;
  rate: number;
  reviews: number;
};

export type ProjectDates = {
  start: number;
  end: number;
};

export type ProjectDetails = {
  title: string;
  role: string;
  logo: string;
  link?: string;
  stats?: ProjectStats;
  summary: string;
  overview: string;
  client: string;
  dates: ProjectDates;
  stacks: Stack;
};
