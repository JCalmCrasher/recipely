"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { Recipe, Recipes } from "../types";
import { buildQueryParams, getHeaders } from "../utils/helpers";
import Card from "./card";
import Search from "./search";

type Props = {
  recipes: Recipe[];
};
const RecipeList = ({ recipes: fetchedRecipes }: Props) => {
  const [recipes, setRecipes] = useState<Recipe[]>(fetchedRecipes);
  const queryRef = useRef<HTMLInputElement>(null);

  const headers = getHeaders();

  const onSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params: { [key: string]: string } = {};

    if (queryRef.current !== null) {
      params.query = queryRef.current.value;

      const queryParams = buildQueryParams(params);

      const res = await fetch(`/api/recipe${queryParams}`, { headers });
      const response: { data: Recipes } = await res.json();

      setRecipes(response.data.results || []);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <h2 className="text-xl font-bold">All Recipes</h2>

        <Search onSubmit={onSearch} ref={queryRef} />
      </div>
      <div className="grid md:grid-cols-4 gap-4 mt-4">
        {recipes.length > 0 ? (
          recipes.map((recipe, i) => (
            <div key={i}>
              <Card>
                <Link href={`/recipes/${recipe.id}`}>
                  <Image
                    src={recipe?.image}
                    alt={recipe?.title}
                    width={100}
                    height={100}
                    className="w-full md:w-full h-w-fit"
                  />
                </Link>
                <Link href="/">
                  <p className="text-sm mt-4">{recipe?.title}</p>
                </Link>
              </Card>
            </div>
          ))
        ) : (
          <span>No recipes available</span>
        )}
      </div>
    </>
  );
};

export default RecipeList;
