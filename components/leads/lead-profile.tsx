"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { X, ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import type { Lead } from "@/lib/db/schema";

interface LeadProfileProps {
  lead: Lead;
  onClose: () => void;
}

const mockActivities = [
  {
    id: "1",
    type: "invitation_request",
    title: "Invitation Request",
    description: "Hi Om, I'm building consultative AI...",
    timestamp: new Date(),
    status: "completed",
  },
  {
    id: "2",
    type: "connection_status",
    title: "Connection Status",
    description: "Check connection status",
    timestamp: new Date(),
    status: "pending",
  },
  {
    id: "3",
    type: "message",
    title: "Connection Acceptance Message",
    description: "Message: Awesome to connect, Dilbag! Allow me...",
    timestamp: new Date(),
    status: "pending",
  },
  {
    id: "4",
    type: "follow_up",
    title: "Follow-up 1",
    description: "Message: Hey, did you get a chance to go thru...",
    timestamp: new Date(),
    status: "pending",
  },
  {
    id: "5",
    type: "follow_up",
    title: "Follow-up 2",
    description: "Message: Hi Dilbag, just following up on my m...",
    timestamp: new Date(),
    status: "pending",
  },
  {
    id: "6",
    type: "message",
    title: "Replied",
    description: "No reply",
    timestamp: new Date(),
    status: "completed",
  },
];

export function LeadProfile({ lead, onClose }: LeadProfileProps) {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <Badge className="bg-purple-100 text-purple-700">
            Pending Approval
          </Badge>
        );
      case "sent":
        return (
          <Badge className="bg-orange-100 text-orange-700">
            Sent 7 mins ago
          </Badge>
        );
      case "accepted":
        return <Badge className="bg-green-100 text-green-700">Accepted</Badge>;
      case "replied":
        return <Badge className="bg-blue-100 text-blue-700">Replied</Badge>;
      case "do_not_contact":
        return (
          <Badge className="bg-gray-100 text-gray-700">Do Not Contact</Badge>
        );
      default:
        return (
          <Badge className="bg-purple-100 text-purple-700">
            Pending Approval
          </Badge>
        );
    }
  };

  const getActivityIcon = (type: string, status: string) => {
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

  return (
    <div className="w-96 bg-white border-l border-gray-200 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Lead Profile</h2>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Lead Info */}
      <div className="p-4 space-y-4">
        <div className="flex items-start gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={lead.avatar || "/placeholder.svg?height=48&width=48"}
            />
            <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {lead.name}
                </h3>
                <p className="text-sm text-gray-600">{lead.title}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="outline" className="text-xs">
                {lead.company}
              </Badge>
              {getStatusBadge(lead.status)}
            </div>
          </div>
        </div>

        {/* Additional Profile Info */}
        <Card>
          <CardContent className="p-4">
            <Button
              variant="ghost"
              className="w-full justify-between p-0 h-auto"
              onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
            >
              <span className="text-sm font-medium">
                Additional Profile Info
              </span>
              {showAdditionalInfo ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
            {showAdditionalInfo && (
              <div className="mt-3 space-y-2 text-sm">
                <div>
                  <span className="text-gray-500">Email:</span>
                  <span className="ml-2">{lead.email || "Not available"}</span>
                </div>
                <div>
                  <span className="text-gray-500">LinkedIn:</span>
                  <span className="ml-2">
                    {lead.linkedinUrl || "Not available"}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Connection Status:</span>
                  <span className="ml-2 capitalize">
                    {lead.connectionStatus?.replace("_", " ")}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Activity Timeline */}
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-gray-900">
            Activity Timeline
          </h4>
          <div className="space-y-4">
            {mockActivities.map((activity, index) => (
              <div key={activity.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  {getActivityIcon(activity.type, activity.status)}
                  {index < mockActivities.length - 1 && (
                    <div className="w-px h-8 bg-gray-200 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h5 className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </h5>
                    {activity.status === "completed" && (
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-700 text-xs"
                      >
                        ✓
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {activity.description}
                  </p>
                  {activity.description.includes("See More") && (
                    <Button
                      variant="link"
                      className="text-xs p-0 h-auto text-blue-600"
                    >
                      See More
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
