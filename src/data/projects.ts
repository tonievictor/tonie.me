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
		title: "rexen",
		overview: "Compile and evaluate regular expressions using Non-deterministic Finite Automata (NFAs).",
		link: "https://hexdocs.pm/rexen",
		tags: ["gleam", "regex"]
	},
	{
		id: 1,
		title: "ogugu",
		overview: "Backend application for an rss file reader.",
		link: "https://github.com/tonievictor/ogugu",
		tags: ["golang", "postgres", "rss", "observability"]
	},
	{
		id: 2,
		title: "bitcask",
		overview: "Log-structured, key-value datastore.",
		link: "https://github.com/tonievictor/bitcask.rs",
		tags: ["rust", "database", "log"]
	},
	{
		id: 3,
		title: "dotenv",
		overview: "A library for loading environment variables from a specified file.",
		link: "https://pkg.go.dev/github.com/tonievictor/dotenv",
		tags: ["golang", "dotenv"]
	},
];
