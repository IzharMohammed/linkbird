import { cn } from "@/lib/utils";

export const ActivityBars = ({ level }: { level: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((bar) => (
        <div
          key={bar}
          className={cn(
            "w-1 h-6 rounded-sm",
            bar <= level ? "bg-orange-400" : "bg-gray-200"
          )}
        />
      ))}
    </div>
  );
};
