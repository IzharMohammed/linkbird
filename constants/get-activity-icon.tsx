export const getActivityIcon = (type: string, status: string) => {
  const baseClasses =
    "w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium";

  if (status === "completed") {
    return <div className={`${baseClasses} bg-blue-500`}>✓</div>;
  }

  switch (type) {
    case "invitation_request":
      return <div className={`${baseClasses} bg-blue-500`}>IR</div>;
    case "connection_status":
      return <div className={`${baseClasses} bg-gray-400`}>CS</div>;
    case "message":
      return <div className={`${baseClasses} bg-gray-400`}>M</div>;
    case "follow_up":
      return <div className={`${baseClasses} bg-gray-400`}>F</div>;
    default:
      return <div className={`${baseClasses} bg-gray-400`}>•</div>;
  }
};
