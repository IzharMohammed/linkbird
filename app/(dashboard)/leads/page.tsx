"use client";

import { useState } from "react";
import { useLeads } from "@/lib/queries/leads";
import { useLeadsStore } from "@/lib/stores/leads-store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LeadProfile } from "@/components/leads/lead-profile";
import { Search, ChevronDown, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

const statusConfig = {
  pending: {
    label: "Pending Approval",
    className: "bg-purple-100 text-purple-700",
  },
  sent: {
    label: "Sent 7 mins ago",
    className: "bg-orange-100 text-orange-700",
  },
  accepted: { label: "Accepted", className: "bg-green-100 text-green-700" },
  replied: { label: "Replied", className: "bg-blue-100 text-blue-700" },
  do_not_contact: {
    label: "Do Not Contact",
    className: "bg-gray-100 text-gray-700",
  },
};

const ActivityBars = ({ level }: { level: number }) => {
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

export default function LeadsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [campaignFilter, setCampaignFilter] = useState("all");

  const {
    selectedLead,
    setSelectedLead,
    isLeadProfileOpen,
    setLeadProfileOpen,
  } = useLeadsStore();

  const { data, isLoading, error } = useLeads({
    search: searchQuery,
    status: statusFilter,
    campaign: campaignFilter,
  });

  const leads = data?.pages.flatMap((page) => page.leads) || [];

  const handleLeadClick = (lead: any) => {
    setSelectedLead(lead);
    setLeadProfileOpen(true);
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-center text-red-600">
          Error loading leads: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full">
      <div className="flex-1 p-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Leads</CardTitle>
              <div className="flex items-center gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search leads..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>

                {/* Status Filter */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Status: {statusFilter === "all" ? "All" : statusFilter}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                      All
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setStatusFilter("pending")}
                    >
                      Pending
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setStatusFilter("sent")}>
                      Sent
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setStatusFilter("accepted")}
                    >
                      Accepted
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setStatusFilter("replied")}
                    >
                      Replied
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setStatusFilter("do_not_contact")}
                    >
                      Do Not Contact
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Campaign Filter */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      Campaign:{" "}
                      {campaignFilter === "all" ? "All" : campaignFilter}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setCampaignFilter("all")}>
                      All
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setCampaignFilter("Gynoveda")}
                    >
                      Gynoveda
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setCampaignFilter("Digi Sidekick")}
                    >
                      Digi Sidekick
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setCampaignFilter("The skin story")}
                    >
                      The skin story
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => setCampaignFilter("Pokonut")}
                    >
                      Pokonut
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-medium text-gray-500">
              <div className="col-span-4">
                Name <ChevronDown className="inline h-4 w-4 ml-1" />
              </div>
              <div className="col-span-3">
                Campaign Name <ChevronDown className="inline h-4 w-4 ml-1" />
              </div>
              <div className="col-span-2">Activity</div>
              <div className="col-span-2">
                Status <ChevronDown className="inline h-4 w-4 ml-1" />
              </div>
              <div className="col-span-1"></div>
            </div>

            {/* Table Body */}
            <div className="space-y-1">
              {leads.map((lead) => {
                const status =
                  statusConfig[lead.status as keyof typeof statusConfig] ||
                  statusConfig.pending;
                const activityLevel = Math.floor(Math.random() * 5) + 1; // Random activity level for demo

                return (
                  <div
                    key={lead.id}
                    className="grid grid-cols-12 gap-4 py-4 hover:bg-gray-50 cursor-pointer rounded-lg transition-colors"
                    onClick={() => handleLeadClick(lead)}
                  >
                    <div className="col-span-4 flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={
                            lead.avatar || "/placeholder.svg?height=40&width=40"
                          }
                        />
                        <AvatarFallback>{lead.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {lead.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {lead.title}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-3 flex items-center">
                      <span className="text-sm text-gray-900">
                        {lead.company}
                      </span>
                    </div>
                    <div className="col-span-2 flex items-center">
                      <ActivityBars level={activityLevel} />
                    </div>
                    <div className="col-span-2 flex items-center">
                      <Badge variant="secondary" className={status.className}>
                        {lead.status === "pending" && "Pending Approval"}
                        {lead.status === "sent" && "Sent 7 mins ago"}
                        {lead.status === "accepted" && "Accepted"}
                        {lead.status === "replied" && "Replied"}
                        {lead.status === "do_not_contact" && "Do Not Contact"}
                      </Badge>
                    </div>
                    <div className="col-span-1 flex items-center justify-end">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem>View Profile</DropdownMenuItem>
                          <DropdownMenuItem>Send Message</DropdownMenuItem>
                          <DropdownMenuItem>Add to Campaign</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            Mark as Do Not Contact
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                );
              })}
            </div>

            {leads.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">
                  No leads found matching your criteria.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Lead Profile Sidebar */}
      {isLeadProfileOpen && selectedLead && (
        <LeadProfile
          lead={selectedLead}
          onClose={() => setLeadProfileOpen(false)}
        />
      )}
    </div>
  );
}
