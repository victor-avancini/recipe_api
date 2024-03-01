import { Router } from "express";
import { RecipeControllers } from "../controllers/recipe.controllers";
import { IsRecipeIdValid } from "../middlewares/isRecipeIdValid.middleware";

export const recipeRouter = Router();

const recipeControllers = new RecipeControllers();

recipeRouter.get("/", recipeControllers.getMany);
recipeRouter.get("/:id", IsRecipeIdValid.execute, recipeControllers.getOne);
recipeRouter.post("/", recipeControllers.create);
recipeRouter.patch("/:id", IsRecipeIdValid.execute, recipeControllers.update);
recipeRouter.delete("/:id", IsRecipeIdValid.execute, recipeControllers.delete);