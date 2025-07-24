export type Stack = {
  roleStack: string[];
  projectStack: string[];
};

export type ProjectStats = {
  nbrDownloads: string;
  rate: number;
  reviews: number;
};

export type ProjectDetails = {
  title: string;
  role: string;
  logo: string;
  link?: string;
  stats?: ProjectStats;
  summary: string;
  overview: string;
  stacks: Stack;
};
