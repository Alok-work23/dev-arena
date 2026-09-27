import { prisma } from "../lib/prisma.js";

export function getAllProblems() {
  return prisma.problem.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
}

export function getProblemById(id: string) {
  return prisma.problem.findUnique({
    where: {
      id,
    },
    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
}

export function createProblem(data: {
  title: string;
  slug: string;
  difficulty: "EASY" | "MEDIUM" | "HARD";
  description: string;
  tags?: string[];
}) {
  const { tags, ...problemData } = data;
  return prisma.problem.create({
    data: {
      ...problemData,

      tags: tags
        ? {
            create: tags.map((name) => ({
              tag: {
                connectOrCreate: {
                  where: { name },
                  create: { name },
                },
              },
            })),
          }
        : undefined,
    },

    include: {
      tags: {
        include: {
          tag: true,
        },
      },
    },
  });
}

export function updateProblem(
  id: string,
  data: {
    title?: string;
    slug?: string;
    difficulty?: "EASY" | "MEDIUM" | "HARD";
    description?: string;
  },
) {
  return prisma.problem.update({
    where: {
      id,
    },
    data,
  });
}

export function deleteProblem(id: string) {
  return prisma.problem.delete({
    where: {
      id,
    },
  });
}