import type { Problem } from "../types/problem.js";
import { problems } from "../data/problems.js";

export function getAllProblems() {
  return problems;
}

export function getProblemById(id: string) {
  return problems.find((problem) => problem.id === id);
}

export function createProblem(data: Omit<Problem, "id">) {
  const problem = {
    id: crypto.randomUUID(),
    ...data,
  };

  problems.push(problem);

  return problem;
}

export function updateProblem(
  id: string,
  data: Partial<Omit<Problem, "id">>,
) {
  const problem = problems.find((problem) => problem.id === id);

  if (!problem) {
    return undefined;
  }

  Object.assign(problem, data);

  return problem;
}

export function deleteProblem(id: string) {
  const index = problems.findIndex((problem) => problem.id === id);

  if (index === -1) {
    return false;
  }

  problems.splice(index, 1);

  return true;
}