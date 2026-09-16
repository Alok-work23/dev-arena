import type { Request, Response } from "express";

import {
  createProblem,
  deleteProblem,
  getAllProblems,
  getProblemById,
  updateProblem,
} from "../services/problem.service.js";

export function getProblems(req: Request, res: Response) {
  let problems = getAllProblems();

  const difficulty = req.query.difficulty;
  const tag = req.query.tag;

  if (
    typeof difficulty === "string" &&
    ["easy", "medium", "hard"].includes(difficulty)
  ) {
    problems = problems.filter(
      (problem) => problem.difficulty === difficulty,
    );
  }

  if (typeof tag === "string") {
    problems = problems.filter((problem) =>
      problem.tags.includes(tag),
    );
  }

  res.status(200).json({
    success: true,
    data: problems,
  });
}

export function getProblem(req: Request, res: Response) {
  const problem = getProblemById(req.params.id);

  if (!problem) {
    res.status(404).json({
      success: false,
      message: "Problem not found",
    });

    return;
  }

  res.status(200).json({
    success: true,
    data: problem,
  });
}

export function postProblem(req: Request, res: Response) {
  const problem = createProblem(req.body);

  res.status(201).json({
    success: true,
    data: problem,
  });
}

export function patchProblem(req: Request, res: Response) {
  const problem = updateProblem(req.params.id, req.body);

  if (!problem) {
    res.status(404).json({
      success: false,
      message: "Problem not found",
    });

    return;
  }

  res.status(200).json({
    success: true,
    data: problem,
  });
}

export function removeProblem(req: Request, res: Response) {
  const deleted = deleteProblem(req.params.id);

  if (!deleted) {
    res.status(404).json({
      success: false,
      message: "Problem not found",
    });

    return;
  }

  res.status(204).send();
}