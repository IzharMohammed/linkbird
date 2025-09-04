"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { MoreHorizontal, ChevronDown } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Campaigns Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Campaigns</CardTitle>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    All Campaigns <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>All Campaigns</DropdownMenuItem>
                  <DropdownMenuItem>Active</DropdownMenuItem>
                  <DropdownMenuItem>Inactive</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: "Just Herbs", status: "Active" },
                { name: "Juicy chemistry", status: "Active" },
                { name: "Hyugalife 2", status: "Active" },
                { name: "Honeyveda", status: "Active" },
                { name: "HempStreet", status: "Active" },
                { name: "HealthyHey 2", status: "Active" },
              ].map((campaign) => (
                <div
                  key={campaign.name}
                  className="flex items-center justify-between py-2"
                >
                  <span className="font-medium">{campaign.name}</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-700"
                  >
                    {campaign.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Activity</CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Most Recent <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Most Recent</DropdownMenuItem>
                <DropdownMenuItem>Oldest First</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "Om Satyarthy",
                title: "Regional Head",
                campaign: "Gynoveda",
                status: "Pending Approval",
                statusColor: "bg-purple-100 text-purple-700",
              },
              {
                name: "Dr. Bhuvaneshwari",
                title: "Fertility & Women's Health ★ A...",
                campaign: "Gynoveda",
                status: "Sent 7 mins ago",
                statusColor: "bg-orange-100 text-orange-700",
              },
              {
                name: "Surdeep Singh",
                title: "Building Product-led SEO Growt...",
                campaign: "Gynoveda",
                status: "Sent 7 mins ago",
                statusColor: "bg-orange-100 text-orange-700",
              },
              {
                name: "Dilbag Singh",
                title: "Manager Marketing & Communicat...",
                campaign: "Gynoveda",
                status: "Sent 7 mins ago",
                statusColor: "bg-orange-100 text-orange-700",
              },
              {
                name: "Vanshy Jain",
                title: "Ayurveda||primary infertility|...",
                campaign: "Gynoveda",
                status: "Sent 7 mins ago",
                statusColor: "bg-orange-100 text-orange-700",
              },
              {
                name: "Sunil Pal",
                title: "Helping Fashion & Lifestyle Br...",
                campaign: "Digi Sidekick",
                status: "Pending Approval",
                statusColor: "bg-purple-100 text-purple-700",
              },
              {
                name: "Utkarsh K.",
                title: "Airbnb Host | Ex-The Skin Stor...",
                campaign: "The skin story",
                status: "Do Not Contact",
                statusColor: "bg-gray-100 text-gray-700",
              },
              {
                name: "Shreya Ramakrishna",
                title: "Deputy Manager - Founder's Off...",
                campaign: "Pokonut",
                status: "Followup 10 mins ago",
                statusColor: "bg-blue-100 text-blue-700",
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>{activity.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {activity.name}
                    </p>
                    <Badge variant="secondary" className={activity.statusColor}>
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500 truncate">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500">{activity.campaign}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* LinkedIn Accounts Section */}
      <Card>
        <CardHeader>
          <CardTitle>LinkedIn Accounts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
              <div>Account</div>
              <div>Status</div>
              <div>Requests</div>
              <div></div>
            </div>
            {[
              {
                name: "Pulkit Garg",
                email: "1999pulkitgarg@gmail.com",
                status: "Connected",
                requests: "17/30",
                progress: 57,
              },
              {
                name: "Jivesh Lakhani",
                email: "jivesh@gmail.com",
                status: "Connected",
                requests: "19/30",
                progress: 63,
              },
              {
                name: "Indrajit Sahani",
                email: "indrajit38mg@gmail.com",
                status: "Connected",
                requests: "18/30",
                progress: 60,
              },
              {
                name: "Bhavya Arora",
                email: "bhavyaarora99.ba@gmail.com",
                status: "Connected",
                requests: "18/100",
                progress: 18,
              },
            ].map((account, index) => (
              <div
                key={index}
                className="grid grid-cols-4 gap-4 items-center py-3"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>{account.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{account.name}</p>
                    <p className="text-xs text-gray-500">{account.email}</p>
                  </div>
                </div>
                <Badge
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 w-fit"
                >
                  {account.status}
                </Badge>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>{account.requests}</span>
                  </div>
                  <Progress value={account.progress} className="h-2" />
                </div>
                <div className="flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Edit Account</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Disconnect
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
