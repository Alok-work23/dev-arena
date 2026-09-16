export type Difficulty = "easy" | "medium" | "hard";

export type Problem = {
  id: string;
  title: string;
  slug: string;
  difficulty: Difficulty;
  description: string;
  tags: string[];
};