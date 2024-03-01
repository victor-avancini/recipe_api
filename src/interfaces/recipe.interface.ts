export interface IRecipe {
    id: number;
    title: string;
    content: string;
    steps: string[];
}

export type TRecipeCreateData = Omit<IRecipe, "id">;

export type TRecipeUpdateData = Partial<TRecipeCreateData>;