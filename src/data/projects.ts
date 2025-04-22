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
		title: "Rexen",
		overview: "Compile and evaluate regular expressions using Non-deterministic Finite Automata (NFAs).",
		link: "https://hexdocs.pm/rexen",
		tags: ["gleam", "regex"]
	},
	{
		id: 1,
		title: "Dotenv",
		overview: "A package for managing environment variables.",
		link: "https://pkg.go.dev/github.com/tonievictor/dotenv",
		tags: ["golang", "dotenv"]
	},
	{
		id: 2,
		title: "Tsh",
		overview: "An implementation of the UNIX shell program.",
		link: "https://github.com/tonievictor/tsh",
		tags: ["c", "unix", "shell"]
	},
	{
		id: 3,
		title: "Socket GC",
		overview: "A terminal based groupchat application.",
		link: "https://github.com/tonievictor/socket-gc",
		tags: ["c", "networking", "sockets"]
	},
];
