import Card from "@/app/components/card";
import Shell from "@/app/components/shell";
import { getRecipeSummary } from "@/app/service/recipe";
import Image from "next/image";

type ParamsProps = {
  params: { recipeId: string };
};
const RecipeInfo = async ({ params }: ParamsProps) => {
  const { recipeId } = params;
  const recipe = await getRecipeSummary(recipeId);

  return (
    <Shell>
      <article>
        <h2 className="text-xl font-bold">{recipe.title}</h2>
        <Card shouldHover={false} classNames="w-full min-h-[200px] mt-4">
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
            classNames="md:w-[262px] min-h-[200px] mt-[54px] md:ml-10"
          >
            <h3 className="text-md font-semibold">Ingredients</h3>
            <ul className="font-panchang ml-4 list-disc list-inside mt-2">
              <li>Oil</li>
              <li>Pepper</li>
              <li>Meat & fish</li>
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
            classNames="md:w-[262px] min-h-[200px] mt-4 md:mt-[120px]"
          >
            <h3 className="text-md font-semibold">Steps</h3>
            <ul className="font-panchang ml-4 list-disc list-inside mt-2">
              <li>Oil</li>
              <li>Pepper</li>
              <li>Meat & fish</li>
            </ul>
          </Card>
        </aside>
      </div>
    </Shell>
  );
};

export default RecipeInfo;
