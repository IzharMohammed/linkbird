"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useCampaign } from "@/lib/queries/campaigns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  BarChart3,
  Settings,
  ChevronDown,
} from "lucide-react";
import { useCampaignLeads } from "@/lib/queries/leads";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LeadSheet } from "@/components/leads/lead-sheet";
import { MetricCard } from "@/components/campaigns/metric-card";
import { ActivityBars } from "@/components/campaigns/activity-bars";
import CampaignsLoading from "@/components/campaigns/campaigns-loading";

export default function CampaignDetailsPage() {
  const params = useParams();
  const campaignId = params.id as string;
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedLead, setSelectedLead] = useState(null);
  const [isLeadSheetOpen, setIsLeadSheetOpen] = useState(false);

  const { data: campaign, isLoading, error } = useCampaign(campaignId);

  const { data: campaignLeads } = useCampaignLeads(campaignId, {
    enabled: !!campaign,
  });
  console.log(campaignLeads?.length);

  const handleLeadClick = (lead: any) => {
    setSelectedLead(lead);
    setIsLeadSheetOpen(true);
  };

  if (isLoading) {
    return <CampaignsLoading />;
  }

  if (error || !campaign) {
    return (
      <div className="p-6">
        <div className="text-center text-red-600">Campaign not found</div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold ">Campaign Details</h1>
          <p className=" mt-1">Manage and track your campaign performance</p>
        </div>
        <Badge className="bg-green-100 text-green-700">Active</Badge>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Leads"
          value={campaign.totalLeads || 0}
          icon={Users}
          color="blue"
        />
        <MetricCard
          title="Request Sent"
          value={campaign.requestsSent || 0}
          icon={Send}
          color="green"
        />
        <MetricCard
          title="Request Accepted"
          value={campaign.requestsAccepted || 0}
          icon={CheckCircle}
          color="orange"
        />
        <MetricCard
          title="Request Replied"
          value={campaign.requestsReplied || 0}
          icon={MessageSquare}
          color="purple"
        />
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Overview
          </TabsTrigger>
          <TabsTrigger value="leads" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Leads
          </TabsTrigger>
          <TabsTrigger value="sequence" className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Sequence
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Campaign Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium ">
                      Leads Contacted
                    </span>
                    <span className="text-sm font-medium ">0.0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium ">
                      Acceptance Rate
                    </span>
                    <span className="text-sm font-medium ">0.0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium ">Reply Rate</span>
                    <span className="text-sm font-medium ">0.0%</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Campaign Details */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 " />
                  <div>
                    <p className="text-sm font-medium ">
                      Start Date: 02/09/2025
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 " />
                  <div>
                    <p className="text-sm font-medium ">Status: Active</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 " />
                  <div>
                    <p className="text-sm font-medium ">
                      Conversion Rate: 0.0%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="leads">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Leads</CardTitle>
              <p className="text-sm ">
                Manage leads associated with this campaign
              </p>
            </CardHeader>
            <CardContent>
              {campaignLeads && campaignLeads.length > 0 ? (
                <div className="space-y-4">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-4 pb-4 border-b border-border text-sm font-medium text-muted-foreground">
                    <div className="col-span-4">
                      Name <ChevronDown className="inline h-4 w-4 ml-1" />
                    </div>
                    <div className="col-span-3">
                      Campaign Name{" "}
                      <ChevronDown className="inline h-4 w-4 ml-1" />
                    </div>
                    <div className="col-span-2">Activity</div>
                    <div className="col-span-2">
                      Status <ChevronDown className="inline h-4 w-4 ml-1" />
                    </div>
                    <div className="col-span-1"></div>
                  </div>

                  {/* Table Body */}
                  <div className="space-y-1">
                    {campaignLeads.map((lead) => {
                      const activityLevel = Math.floor(Math.random() * 5) + 1;

                      return (
                        <div
                          key={lead.id}
                          className="grid grid-cols-12 gap-4 py-4 hover:bg-accent/50 cursor-pointer rounded-lg transition-colors"
                          onClick={() => handleLeadClick(lead)}
                        >
                          <div className="col-span-4 flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage
                                src={
                                  lead.avatar ||
                                  "/placeholder.svg?height=40&width=40"
                                }
                              />
                              <AvatarFallback>
                                {lead.name.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-foreground truncate">
                                {lead.name}
                              </p>
                              <p className="text-xs text-muted-foreground truncate">
                                {lead.title}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-3 flex items-center">
                            <span className="text-sm text-foreground">
                              {lead.company}
                            </span>
                          </div>
                          <div className="col-span-2 flex items-center">
                            <ActivityBars level={activityLevel} />
                          </div>
                          <div className="col-span-2 flex items-center">
                            <Badge
                              variant="secondary"
                              className={
                                lead.status === "pending"
                                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                                  : lead.status === "sent"
                                  ? "bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300"
                                  : lead.status === "accepted"
                                  ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                                  : lead.status === "replied"
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                              }
                            >
                              {lead.status === "pending" && "Pending Approval"}
                              {lead.status === "sent" && "Sent 7 mins ago"}
                              {lead.status === "accepted" && "Accepted"}
                              {lead.status === "replied" && "Replied"}
                              {lead.status === "do_not_contact" &&
                                "Do Not Contact"}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    No leads found for this campaign.
                  </p>
                  <Button className="mt-4">Add Leads</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sequence">
          <Card>
            <CardHeader>
              <CardTitle>Message Sequence</CardTitle>
              <p className="text-sm ">Configure your outreach sequence</p>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Send className="h-12 w-12  mx-auto mb-4" />
                <p>No message sequence configured.</p>
                <Button className="mt-4">Create Sequence</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Settings</CardTitle>
              <p className="text-sm ">Configure campaign preferences</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium ">Campaign Name</label>
                  <input
                    type="text"
                    value={campaign.name}
                    className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="text-sm font-medium ">Status</label>
                  <select className="mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <LeadSheet
        lead={selectedLead}
        open={isLeadSheetOpen}
        onOpenChange={setIsLeadSheetOpen}
      />
    </div>
  );
}
