export interface IBlog {
  _id: string;
  author: string;
  blog: string;
  title: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Job {
  _id: string;
  title: string;
  category: string;
  reportsTo: string;
  employment: string;
  employmentTerms: string;
  location: string;
  details: {
    responsibilities: Array<String>;
    requirements: Array<String>;
  };
  salary: string;
  condition: string;
  closingDate: string;
  activeId: String;
  setActiveJobId: (_id: string) => void;
}

export interface IUserData {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  vegan: boolean;
  phone: string;
  expires: string;
  gender: string;
}

export interface IComment {
  _id?: string;
  user?: string;
  newsblog?: string;
  comment?: string;
  replies?: Array<null>;
  createdAt?: string;
  updatedAt: string;
  _v?: number;
}
