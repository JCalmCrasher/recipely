import Card from "@/app/components/card";
import Shell from "@/app/components/shell";
import { getRecipeSummary } from "@/app/service/recipe";
import React from "react";

type ParamsProps = {
  params: { recipeId: string };
};
const RecipeInfo = async ({ params }: ParamsProps) => {
  const { recipeId } = params;
  const recipe = await getRecipeSummary(recipeId);

  return (
    <Shell>
      <h2 className="text-xl font-bold">{recipe.title}</h2>
      <Card shouldHover={false} classNames="w-full min-h-[200px]">
        <h3 className="text-md font-semibold">About</h3>
        <div className="mt-3 summary" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      </Card>
    </Shell>
  );
};

export default RecipeInfo;
