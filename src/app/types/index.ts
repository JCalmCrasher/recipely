export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type Recipes = {
  results: Recipe[];
};

export type RecipeSummary = {
  id: number;
  title: string;
  summary: string;
};
