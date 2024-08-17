export type ProjectsDataType = {
  id: number;
  title: string;
  overview: string;
  link?: string;
	tags?: string[];
};

export const ProjectsData: ProjectsDataType[] = [
  {
    id: 0,
    title: "Simple shell",
    overview: "An implementation of the UNIX shell program.",
    link: "https://github.com/tonievictor/simple_shell",
		tags: ["c", "unix", "shell"]
  },
  {
    id: 1,
    title: "Go dotenv",
    overview: "A dotenv package for go projects.",
    link: "https://github.com/tonievictor/go-dotenv",
		tags: ["golang", "dotenv"]
  },
  {
    id: 2,
    title: "Socket GC",
    overview: "A terminal based groupchat application.",
    link: "https://github.com/tonievictor/socket-gc",
		tags: ["c", "networking", "sockets"]
  },
];
