import type { Request, Response } from "express";

import {
  createProblem,
  deleteProblem,
  getAllProblems,
  getProblemById,
  updateProblem,
} from "../services/problem.service.js";

export async function getProblems(_req: Request, res: Response) {
  const problems = await getAllProblems();

  res.status(200).json({
    success: true,
    data: problems,
  });
}

export async function getProblem(req: Request, res: Response) {
  const problem = await getProblemById(req.params.id);

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

export async function postProblem(req: Request, res: Response) {
  const problem = await createProblem(req.body);

  res.status(201).json({
    success: true,
    data: problem,
  });
}

export async function patchProblem(req: Request, res: Response) {
  const problem = await updateProblem(req.params.id, req.body);

  res.status(200).json({
    success: true,
    data: problem,
  });
}

export async function removeProblem(req: Request, res: Response) {
  await deleteProblem(req.params.id);

  res.status(204).send();
}