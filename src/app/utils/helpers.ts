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

const greatestCommonDivisor = (a: number, b: number): number => {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
};

export const decimalToFraction = (decimal: number) => {
  if (Number.isInteger(decimal)) {
    return decimal.toString(); // Return the whole number as a string
  }

  const numerator = decimal * 100;
  const denominator = 100;
  const gcd = greatestCommonDivisor(numerator, denominator);
  const simplifiedNumerator = numerator / gcd;
  const simplifiedDenominator = denominator / gcd;

  return `${simplifiedNumerator}/${simplifiedDenominator}`;
};
