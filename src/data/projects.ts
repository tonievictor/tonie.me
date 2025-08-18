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
		title: "Ogugu",
		overview: "Backend application for an rss file reader",
		link: "https://github.com/tonievictor/ogugu",
		tags: ["golang", "postgres", "rss", "observability"]
	},
	{
		id: 2,
		title: "Bitcask",
		overview: "Log-structured, key-value datastore",
		link: "https://github.com/tonievictor/bitcask.rs",
		tags: ["rust", "database", "log"]
	},
	{
		id: 3,
		title: "Dotenv",
		overview: "A package for managing environment variables.",
		link: "https://pkg.go.dev/github.com/tonievictor/dotenv",
		tags: ["golang", "dotenv"]
	},
];
