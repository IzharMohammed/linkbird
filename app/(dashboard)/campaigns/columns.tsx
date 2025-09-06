"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusBadge } from "@/components/campaigns/status-badge";
import { Badge } from "@/components/ui/badge";
import { Campaign } from "@/db/schema";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ChevronDown } from "lucide-react";

export const columns: ColumnDef<Campaign>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent"
        >
          Campaign Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <span className="text-sm font-medium ">{row.getValue("name")}</span>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent"
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return (
        <Badge className="bg-green-100 text-green-700">
          {status === "active" ? "Active" : "Inactive"}
        </Badge>
      );
    },
  },
  {
    accessorKey: "totalLeads",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="h-auto p-0 font-medium hover:bg-transparent"
        >
          Total Leads
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const totalLeads = row.getValue("totalLeads") as number;
      return <StatusBadge type="total" count={totalLeads || 0} />;
    },
  },
  {
    accessorKey: "requestsSent",
    header: "Request Status",
    cell: ({ row }) => {
      const campaign = row.original;
      return (
        <div className="flex items-center gap-4">
          <StatusBadge type="sent" count={campaign.requestsSent || 0} />
          <StatusBadge type="accepted" count={campaign.requestsAccepted || 0} />
          <StatusBadge type="replied" count={campaign.requestsReplied || 0} />
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "",
    cell: ({ row }) => {
      const campaign = row.original;
      return (
        <div className="flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => e.stopPropagation()}
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
      );
    },
  },
];
