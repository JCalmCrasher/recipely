import RecipeList from "../components/recipe-list";
import { getRecipes } from "../service/recipe";
import { SPACING as p } from "../utils/constants";

const Recipe = async () => {
  const res = await getRecipes();
  const recipes = res?.results || [];

  return (
    <main className={p}>
      <RecipeList recipes={recipes} />
    </main>
  );
};

export default Recipe;
