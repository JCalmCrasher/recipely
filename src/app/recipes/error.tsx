"use client";

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Couldn&apos;t fetch recipes</h2>
    </div>
  );
}
