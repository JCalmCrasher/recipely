import { cache } from "react";
import type { RecipeSummary, Recipes } from "../types";
import { buildQueryParams, getHeaders } from "../utils/helpers";
import "server-only";

const baseUrl = process.env.API_URL as string;

export const getRecipes = cache(async (query = ""): Promise<Recipes> => {
  const headers = getHeaders();

  const params: { [key: string]: string } = {};
  if (query) params.query = query;
  const queryParams = buildQueryParams(params);

  const res = await fetch(`${baseUrl}/recipes/complexSearch${queryParams}`, {
    headers
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
});

export const getRecipeSummary = cache(
  async (recipeId = ""): Promise<RecipeSummary> => {
    const headers = getHeaders();

    const res = await fetch(`${baseUrl}/recipes/${recipeId}/summary`, {
      headers
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
);
