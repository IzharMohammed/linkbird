"use client";

import { useEffect, useState } from "react";
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
import { Search, ChevronDown } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { ActivityBars } from "@/components/leads/activity-bars";
import { statusConfig } from "@/constants/status-config";
import LeadsLoading from "@/components/leads/leads-loading";
import { LeadSheet } from "@/components/leads/lead-sheet";

export default function LeadsPage() {
  const [isLeadSheetOpen, setIsLeadSheetOpen] = useState(false);

  // Get data from Zustand store for filtering
  const {
    selectedLead,
    searchQuery,
    statusFilter,
    campaignFilter,
    setSelectedLead,
    setSearchQuery,
    setStatusFilter,
    setCampaignFilter,
    getFilteredLeads,
  } = useLeadsStore();

  // Use the infinite query for data loading
  const { isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useLeads();

  // Get filtered leads from store (this is instant)
  const leads = getFilteredLeads();

  const handleLeadClick = (lead: any) => {
    setSelectedLead(lead);
    setIsLeadSheetOpen(true);
  };

  // Infinite scroll hook for loading more data from server
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return <LeadsLoading />;
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
              <CardTitle>Leads ({leads.length})</CardTitle>

              <div className="flex items-center gap-4">
                {/* Search - Instant filtering from stored data */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
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
            <div className="grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium">
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
                const activityLevel = Math.floor(Math.random() * 5) + 1;

                return (
                  <div
                    key={lead.id}
                    className="grid grid-cols-12 gap-4 py-4  cursor-pointer rounded-lg transition-colors"
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
                        <p className="text-sm font-medium truncate">
                          {lead.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {lead.title}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-3 flex items-center">
                      <span className="text-sm text-gray-600">
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
                  </div>
                );
              })}
            </div>

            {/* Infinite scroll sentinel - for loading more data from server */}
            <div ref={ref} className="h-12 flex items-center justify-center">
              {isFetchingNextPage && <p>Loading more...</p>}
              {!hasNextPage && (
                <p className="text-gray-500 text-sm">No more leads</p>
              )}
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

      <LeadSheet
        lead={selectedLead}
        open={isLeadSheetOpen}
        onOpenChange={setIsLeadSheetOpen}
      />
    </div>
  );
}
