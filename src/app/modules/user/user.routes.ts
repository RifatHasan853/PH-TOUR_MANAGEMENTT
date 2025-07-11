import { Router } from "express";
import { validateRequest } from "../../middlewares/validate.request";
import { UserControllers } from "./user.controller";
import { createUserZodSchema } from "./user.validator";

const router = Router();
router.post(
  "/register",
  validateRequest(createUserZodSchema),
  UserControllers.createUser
);
router.get("/all-users", UserControllers.getAllUsers);

export const UserRoutes = router;
