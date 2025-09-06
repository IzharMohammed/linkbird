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
import { DataTable } from "./data-table";
import { columns } from "./columns";

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
          <DataTable
            columns={columns}
            data={filteredCampaigns}
            searchPlaceholder="Search Campaigns"
            searchKey="name"
          />
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
