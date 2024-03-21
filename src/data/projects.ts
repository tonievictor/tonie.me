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
    overview: "An implementation of the UNIX shell program.",
    githublink: "https://github.com/tonie-ng/simple_shell",
    image: "/images/simpleshell.png",
    imagealt: "A cover photo for the simple shell project.",
  },
  {
    id: 1,
    title: "Go dotenv",
    overview: "A dotenv package for go projects.",
    githublink: "https://github.com/tonie-ng/go-dotenv",
    image: "/images/go-dotenv.png",
    imagealt: "A code snippet showcasing the use of the dotenv package",
  },
  {
    id: 2,
    title: "Socket GC",
    overview: "A terminal based groupchat application.",
    image: "/images/socket-gc.png",
    githublink: "https://github.com/tonie-ng/socket-gc",
    imagealt: " A picture of 4 terminal emulators having a chat.",
  },
];
