"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChevronDown, ChevronUp, Trash2 } from "lucide-react";
import { Lead } from "@/db/schema";
import { getStatusBadge } from "@/constants/get-status-badge";
import { getActivityIcon } from "@/constants/get-activity-icon";
import { mockActivities } from "@/constants/mock-activity";

interface LeadSheetProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LeadSheet({ lead, open, onOpenChange }: LeadSheetProps) {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  if (!lead) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-[1000px] sm:w-[600px] p-6">
        <SheetHeader>
          <SheetTitle>Lead Profile</SheetTitle>
        </SheetHeader>

        {/* Lead Info */}
        <div className="mt-6 space-y-6">
          <div className="flex items-start gap-3">
            <Avatar className="h-14 w-14">
              <AvatarImage
                src={lead.avatar || "/placeholder.svg?height=48&width=48"}
              />
              <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {lead.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{lead.title}</p>
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
                  <div className="flex gap-4">
                    <div>
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={lead.avatar || ""} />
                      </Avatar>
                    </div>
                    <div>
                      <div>
                        <span>{lead.name}</span>
                      </div>
                      <div>
                        <span>{lead.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Activity Timeline */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-foreground">
              Activity Timeline
            </h4>
            <div className="space-y-4">
              {mockActivities.map((activity, index) => (
                <div key={activity.id} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    {getActivityIcon(activity.type, activity.status)}
                    {index < mockActivities.length - 1 && (
                      <div className="w-px h-8 bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-medium text-foreground">
                        {activity.title}
                      </h5>
                      {activity.status === "completed" && (
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 text-xs"
                        >
                          ✓
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
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
      </SheetContent>
    </Sheet>
  );
}
