import type { Problem } from "../types/problem.js";

export const problems: Problem[] = [
  {
    id: "1",
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "easy",
    description:
      "Given an array of integers, return the indices of two numbers that add up to a target.",
    tags: ["array", "hash-map"],
  },
  {
    id: "2",
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    difficulty: "easy",
    description:
      "Determine whether a string containing brackets is valid.",
    tags: ["stack", "string"],
  },
  {
    id: "3",
    title: "Number of Islands",
    slug: "number-of-islands",
    difficulty: "medium",
    description:
      "Given a 2D grid of land and water, count the number of islands.",
    tags: ["graph", "dfs", "bfs"],
  },
];