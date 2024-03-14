export type ProjectsDataType = {
  id: number;
  title: string;
  overview: string;
  githublink?: string;
  image: string;
  imagealt: string;
  websitelink?: string;
};

export const ProjectsData: ProjectsDataType[] = [
  {
    id: 0,
    title: "Simple shell",
    overview: "An implementation of the UNIX shell in C.",
    githublink: "https://github.com/tonie-ng/simple_shell",
    image: "/images/simpleshell.png",
    imagealt: "A cover photo for the simple shell project",
    websitelink: "",
  },
  {
    id: 1,
    title: "Go dotenv",
    overview: "A dotenv package for go projects.",
    githublink: "ksnkns",
    image: "/images/projectsample.png",
    imagealt: "",
  },
  {
    id: 2,
    title: "Go dotenv",
    overview:
      "lsnjsbs s hsvh shbvsjs hbshs  hsh jbsji iajm n sjbisnjbnsu ubnjs jbib biu busi i",

    image: "/images/projectsample.png",
    websitelink: "jsbs",
    imagealt: " jsnsjs",
  },
];
