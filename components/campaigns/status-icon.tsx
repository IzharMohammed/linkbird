import {
  Users,
  Send,
  CheckCircle,
  MessageSquare,
  LinkIcon,
} from "lucide-react";

export const StatusIcon = ({ type, count }: { type: string; count: number }) => {
  const iconProps = { className: "h-4 w-4" };

  switch (type) {
    case "total":
      return <Users {...iconProps} />;
    case "sent":
      return <Send {...iconProps} />;
    case "accepted":
      return <CheckCircle {...iconProps} />;
    case "replied":
      return <MessageSquare {...iconProps} />;
    case "connected":
      return <LinkIcon {...iconProps} />;
    default:
      return <Users {...iconProps} />;
  }
};
