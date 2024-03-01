import { generateId, recipeDatabase } from "../database/database";
import { IRecipe, TRecipeCreateData, TRecipeUpdateData } from "../interfaces/recipe.interface";

export class RecipeService {
    getMany(search?: string): IRecipe[] {
        if (search) {
            const searchResults = recipeDatabase.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase()));

            return searchResults;
        } else {
            return recipeDatabase
        }
    }

    getOne(recipe: IRecipe): IRecipe {
        return recipe;
    }

    create(body: TRecipeCreateData): IRecipe {
        const newRecipe: IRecipe = {
            id: generateId(),
            title: body.title,
            content: body.content,
            steps: body.steps
        };

        recipeDatabase.push(newRecipe);

        return newRecipe;
    }

    update(currentRecipe: IRecipe, body: TRecipeUpdateData): IRecipe {
        
        const updatedRecipe = { ...currentRecipe, ...body };

        const index = recipeDatabase.findIndex(recipe => recipe.id === currentRecipe.id);

        recipeDatabase.splice(index, 1, updatedRecipe)

        return updatedRecipe;
    }

    delete(id: number): void {
        const index = recipeDatabase.findIndex(recipe => recipe.id === id);

        recipeDatabase.splice(index, 1);
    }

}