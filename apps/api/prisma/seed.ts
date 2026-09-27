import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

const problems = [
  {
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "EASY" as const,
    description:
      "Given an array of integers, return the indices of two numbers that add up to a target.",
    tags: ["array", "hash-map"],
  },
  {
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    difficulty: "EASY" as const,
    description:
      "Given a string containing brackets, determine whether the brackets are correctly balanced.",
    tags: ["stack", "string"],
  },
  {
    title: "Binary Tree Traversal",
    slug: "binary-tree-traversal",
    difficulty: "MEDIUM" as const,
    description:
      "Traverse a binary tree using depth-first search and return the visited nodes.",
    tags: ["tree", "dfs", "recursion"],
  },
  {
    title: "Number of Islands",
    slug: "number-of-islands",
    difficulty: "MEDIUM" as const,
    description:
      "Given a grid containing land and water, determine the number of connected islands.",
    tags: ["graph", "bfs", "dfs"],
  },
  {
    title: "Longest Increasing Subsequence",
    slug: "longest-increasing-subsequence",
    difficulty: "HARD" as const,
    description:
      "Find the length of the longest strictly increasing subsequence in an integer array.",
    tags: ["dynamic-programming", "binary-search"],
  },
];

async function main() {
  for (const problem of problems) {
    const { tags, ...problemData } = problem;

    await prisma.problem.upsert({
      where: {
        slug: problem.slug,
      },
      update: problemData,
      create: {
        ...problemData,

        tags: {
          create: tags.map((name) => ({
            tag: {
              connectOrCreate: {
                where: { name },
                create: { name },
              },
            },
          })),
        },
      },
    });
  }

  console.log(`Seeded ${problems.length} problems.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });