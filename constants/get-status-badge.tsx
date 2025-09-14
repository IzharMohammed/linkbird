import { Badge } from "lucide-react";

export const getStatusBadge = (status: string) => {
  switch (status) {
    case "pending":
      return (
        <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
          Pending Approval
        </Badge>
      );
    case "sent":
      return (
        <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300">
          Sent 7 mins ago
        </Badge>
      );
    case "accepted":
      return (
        <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
          Accepted
        </Badge>
      );
    case "replied":
      return (
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
          Replied
        </Badge>
      );
    case "do_not_contact":
      return (
        <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          Do Not Contact
        </Badge>
      );
    default:
      return (
        <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300">
          Pending Approval
        </Badge>
      );
  }
};
