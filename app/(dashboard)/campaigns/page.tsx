"use client";

import { useState } from "react";
import Link from "next/link";
import { useCampaigns } from "@/lib/queries/campaigns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, ChevronDown, Plus } from "lucide-react";
import { StatusBadge } from "@/components/campaigns/status-badge";
import CampaignsLoading from "@/components/campaigns/campaigns-loading";

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { data: campaigns, isLoading, error } = useCampaigns();

  const filteredCampaigns =
    campaigns?.filter((campaign) => {
      const matchesSearch = campaign.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || campaign.status === statusFilter;
      return matchesSearch && matchesStatus;
    }) || [];

  if (isLoading) {
    return <CampaignsLoading />;
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="text-center text-red-600">
          Error loading campaigns: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Campaigns</CardTitle>
              <p className="text-sm  mt-1">
                Manage your campaigns and track their performance.
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Button
                variant={statusFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("all")}
              >
                All Campaigns
              </Button>
              <Button
                variant={statusFilter === "active" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("active")}
              >
                Active
              </Button>
              <Button
                variant={statusFilter === "inactive" ? "default" : "outline"}
                size="sm"
                onClick={() => setStatusFilter("inactive")}
              >
                Inactive
              </Button>
            </div>

            <div className="flex-1 max-w-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 " />
                <Input
                  placeholder="Search campaigns..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-4 border-b  text-sm font-medium ">
            <div className="col-span-3">Campaign Name</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Total Leads</div>
            <div className="col-span-2">Request Status</div>
            <div className="col-span-2">Connection Status</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Body */}
          <div className="space-y-1">
            {filteredCampaigns.map((campaign) => (
              <Link key={campaign.id} href={`/campaigns/${campaign.id}`}>
                <div className="grid grid-cols-12 gap-4 py-4  cursor-pointer rounded-lg transition-colors">
                  <div className="col-span-3 flex items-center">
                    <span className="text-sm font-medium ">
                      {campaign.name}
                    </span>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <Badge className="bg-green-100 text-green-700">
                      {campaign.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </div>

                  <div className="col-span-2 flex items-center">
                    <StatusBadge
                      type="total"
                      count={campaign.totalLeads || 0}
                    />
                  </div>

                  <div className="col-span-2 flex items-center gap-4">
                    <StatusBadge
                      type="sent"
                      count={campaign.requestsSent || 0}
                    />
                    <StatusBadge
                      type="accepted"
                      count={campaign.requestsAccepted || 0}
                    />
                    <StatusBadge
                      type="replied"
                      count={campaign.requestsReplied || 0}
                    />
                  </div>

                  <div className="col-span-2 flex items-center gap-4">
                    <StatusBadge type="connected" count={0} />
                    <StatusBadge type="replied" count={0} />
                  </div>

                  <div className="col-span-1 flex items-center justify-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => e.preventDefault()}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Campaign</DropdownMenuItem>
                        <DropdownMenuItem>Duplicate</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12">
              <p>No campaigns found matching your criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
