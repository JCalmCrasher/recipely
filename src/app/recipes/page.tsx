import Image from "next/image";
import { SPACING as p } from "../@variable";
import Card from "../components/card";
import Link from "next/link";

const Recipe = () => {
  const recipes: any[] = []; //TODO: fix this typing later

  return (
    <main className={p}>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">All Recipes</h2>
          <input
            type="text"
            className="bg-transparent border border-teal-900 focus-visible:border-black h-11 outline-none px-4"
          />
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {recipes.length > 0 ? (
            recipes.map((_, i) => (
              <div key={i}>
                <Card>
                  <Link href="/">
                    <Image
                      src="https://spoonacular.com/recipeImages/658277-312x231.jpg"
                      alt="food showcase"
                      width={100}
                      height={100}
                      className="w-full md:w-full h-w-fit"
                    />
                  </Link>
                  <Link href="/">
                    <p className="font-[700] text-base mt-4">Ewa Agoyin</p>
                  </Link>
                </Card>
              </div>
            ))
          ) : (
            <span>No recipes available</span>
          )}
        </div>
      </div>
    </main>
  );
};

export default Recipe;
