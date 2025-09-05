import { StatusIcon } from "./status-icon";

export const StatusBadge = ({
  type,
  count,
}: {
  type: string;
  count: number;
}) => {
  const getColor = (type: string) => {
    switch (type) {
      case "sent":
        return "text-green-600";
      case "accepted":
        return "text-green-600";
      case "replied":
        return "text-blue-600";
      case "connected":
        return "text-blue-600";
    }
  };

  return (
    <div className="flex items-center gap-1">
      <StatusIcon type={type} count={count} />
      <span className={`text-sm font-medium ${getColor(type)}`}>{count}</span>
    </div>
  );
};
