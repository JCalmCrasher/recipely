export const buildQueryParams = (params: Record<string, any>) => {
  const queryParams = Object.entries(params)
    .filter(([_, value]) => value !== undefined)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  return queryParams ? `?${queryParams}` : "";
};

export const getHeaders = (): Headers => {
  const headers = new Headers();
  headers.append("x-api-key", process.env.API_KEY as string);
  headers.append("Content-Type", "application/json");
  return headers;
};