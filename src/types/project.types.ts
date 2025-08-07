export type Stack = {
  roleStack: string[];
  projectStack: string[];
};

export type ProjectStats = {
  nbrDownloads: string;
  rate: number;
  reviews: number;
};

export type Dates = {
  start: number;
  end: number | "Present";
};

export type ProjectInfo = {
  title: string;
  role: string;
  logo: string;
  summary: string;
  client: string;
  dates: Dates;
  stacks: Stack;
  link?: string;
};

export type ProjectDetails = {
  info: ProjectInfo;
  stats?: ProjectStats;
  overview: string;
};
