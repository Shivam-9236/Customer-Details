import express from "express";
import {
  adduser,
  getusers,
  getUser,
  editUser,
  deleteUser,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/add", adduser);
router.get("/all", getusers);
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
