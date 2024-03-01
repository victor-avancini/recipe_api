import "express-async-errors"
import express, { json } from "express";
import { recipeRouter } from "./routes/recipe.routes";
import { HandleErrors } from "./errors/handleError";

export const app = express();

app.use(json());
app.use("/recipes", recipeRouter);
app.use(HandleErrors.execute);