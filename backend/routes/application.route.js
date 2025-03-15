import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

const router = express.Router();

router.post("/apply/:id",isAuthenticated,applyJob)
router.get("/get",isAuthenticated,getAppliedJobs)
router.get("/:id/applicants",isAuthenticated,getApplicants)
router.post("/status/:id/update",isAuthenticated,updateStatus)

export default router