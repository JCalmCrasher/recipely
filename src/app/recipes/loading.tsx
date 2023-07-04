import { Skeleton } from "../components/skeleton";
import { SPACING as p } from "../utils/constants";

const Loading = () => {
  return (
    <div className={p}>
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <Skeleton className="w-40 h-10" />
        <Skeleton className="w-full md:w-[500px] h-10 mt-1 md:mt-0" />
      </div>
      <div className="grid md:grid-cols-4 gap-4 mt-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-80" />
        ))}
      </div>
    </div>
  );
};

export default Loading;
