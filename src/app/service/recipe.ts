import { cache } from "react";
import type { Recipes } from "../types";
import { buildQueryParams, getHeaders } from "../utils/helpers";
import "server-only";

export const getRecipes = cache(async (query = ""): Promise<Recipes> => {
  const headers = getHeaders();

  const params: { [key: string]: string } = {};
  if (query) params.query = query;
  const queryParams = buildQueryParams(params);

  const baseUrl = process.env.API_URL as string;
  const res = await fetch(`${baseUrl}/recipes/complexSearch${queryParams}`, {
    headers
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
});
