import Shell from "@/app/components/shell";
import { Skeleton } from "@/app/components/skeleton";

const Loading = () => {
  return (
    <Shell>
      <Skeleton className="w-60 h-10" />

      <Skeleton className="w-full h-60 mt-4" />
    </Shell>
  );
};

export default Loading;
