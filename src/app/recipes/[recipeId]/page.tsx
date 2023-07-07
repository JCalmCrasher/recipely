import Card from "@/app/components/card";
import Shell from "@/app/components/shell";
import {
  getRecipeIngredients,
  getRecipeInstructions,
  getRecipeSummary
} from "@/app/service/recipe";
import { decimalToFraction } from "@/app/utils/helpers";
import Image from "next/image";
import { v4 as key } from "uuid";

type ParamsProps = {
  params: { recipeId: string };
};
const RecipeInfo = async ({ params }: ParamsProps) => {
  const { recipeId } = params;
  const recipeData = getRecipeSummary(recipeId);
  const recipeIngredientsData = getRecipeIngredients(recipeId);
  const recipeInstructionData = getRecipeInstructions(recipeId);

  const [recipe, recipeIngredients, recipeInstructions] = await Promise.all([
    recipeData,
    recipeIngredientsData,
    recipeInstructionData
  ]);

  return (
    <Shell>
      <article>
        <h2 className="text-xl font-bold">{recipe.title}</h2>
        <Card shouldHover={false} classNames="bg-slate-300 w-full min-h-[200px] mt-4">
          <h3 className="text-md font-semibold">About</h3>
          <div
            className="mt-3 summary"
            dangerouslySetInnerHTML={{ __html: recipe.summary }}
          />
        </Card>
      </article>

      <div className="flex flex-col md:flex-row">
        <aside>
          <Card
            shouldHover={false}
            classNames="bg-teal-300 md:w-[262px] min-h-[200px] mt-[54px] md:ml-10"
          >
            <h3 className="text-md font-semibold">Ingredients</h3>
            <ul className="font-panchang ml-4 list-disc list-inside mt-2">
              {recipeIngredients.ingredients.map((ingredient) => {
                const { amount } = ingredient;
                return (
                  <li className="font-nunito text-lg" key={key()}>{`${decimalToFraction(amount.us.value)} ${
                    ingredient.name
                  }`}</li>
                );
              })}
            </ul>
          </Card>
        </aside>
        <Image
          className="hidden md:block"
          src="/recipe-process-line.svg"
          alt="line"
          width={200}
          height={0}
        />
        <aside>
          <Card
            shouldHover={false}
            classNames="bg-blue-300 min-h-[200px] mt-4 md:mt-[120px]"
          >
            <h3 className="text-md font-semibold">Steps</h3>
            <ul className="font-panchang ml-4 list-disc list-inside mt-2">
              {recipeInstructions.map((_recipes) =>
                _recipes.steps.map((s) => (
                  <li className="font-nunito text-lg" key={key()}>{s.step}</li>
                ))
              )}
            </ul>
          </Card>
        </aside>
      </div>
    </Shell>
  );
};

export default RecipeInfo;
