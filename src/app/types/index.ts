export type Recipe = {
  id: number;
  title: string;
  image: string;
  imageType: string;
};

export type Recipes = {
  results: Recipe[];
};
