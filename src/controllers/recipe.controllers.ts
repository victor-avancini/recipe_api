import { Request, Response } from "express";
import { RecipeService } from "../services/recipe.services";

export class RecipeControllers {
    getMany(req: Request, res: Response) {
        const recipeService = new RecipeService();

        const search = req.query.search;

        const response = recipeService.getMany(search as string);

        return res.status(200).json(response);
    }

    getOne(req: Request, res: Response){
        const recipeService = new RecipeService();

        const response = recipeService.getOne(res.locals.recipe);

        return res.status(200).json(response)
    }

    create(req: Request, res: Response){
        const recipeService = new RecipeService();

        const response = recipeService.create(req.body);

        return res.status(201).json(response);
    }

    update(req: Request, res: Response){
        const recipeService = new RecipeService();

        const response = recipeService.update(res.locals.recipe, req.body);

        return res.status(200).json(response);
    }

    delete(req: Request, res: Response){
        const recipeService = new RecipeService();

        const id = req.params.id;

        recipeService.delete(Number(id))

        return res.status(204).json()    
    }
}