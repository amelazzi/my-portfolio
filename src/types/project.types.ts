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

export type ProjectInfo = {
  title: string;
  role: string;
  logo: string;
  summary: string;
  client: string;
  dates: ProjectDates;
  stacks: Stack;
  link?: string;
};

export type ProjectDetails = {
  info: ProjectInfo;
  stats?: ProjectStats;
  overview: string;
};
