import { Router } from "express";

import {
  getProblem,
  getProblems,
  patchProblem,
  postProblem,
  removeProblem,
} from "../controllers/problem.controller.js";

import { validate } from "../middleware/validate.middleware.js";

import {
  createProblemSchema,
  updateProblemSchema,
} from "../schemas/problem.schema.js";

const router = Router();

router.get("/", getProblems);

router.get("/:id", getProblem);

router.post(
  "/",
  validate(createProblemSchema),
  postProblem,
);

router.patch(
  "/:id",
  validate(updateProblemSchema),
  patchProblem,
);

router.delete("/:id", removeProblem);

export { router as problemRouter };