import { Card, CardContent } from "../ui/card";

export const MetricCard = ({
  title,
  value,
  icon: Icon,
  color = "blue",
}: {
  title: string;
  value: string | number;
  icon: any;
  color?: string;
}) => {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    purple: "bg-purple-50 text-purple-600",
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium ">{title}</p>
            <p className="text-3xl font-bold  mt-2">{value}</p>
          </div>
          <div
            className={`p-3 rounded-lg ${
              colorClasses[color as keyof typeof colorClasses]
            }`}
          >
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
