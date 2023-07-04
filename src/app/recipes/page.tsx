import RecipeList from "../components/recipe-list";
import Shell from "../components/shell";
import { getRecipes } from "../service/recipe";

const Recipe = async () => {
  const res = await getRecipes();
  const recipes = res?.results || [];

  return (
    <Shell>
      <RecipeList recipes={recipes} />
    </Shell>
  );
};

export default Recipe;
