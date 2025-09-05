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
import { RECENT_ACTIVITY } from "@/constants/recent-activity";
import { ACCOUNTS } from "@/constants/accounts";
import { CAMPAIGNS } from "@/constants/campaigns";

export default function DashboardPage() {
  return (
    // <div className="p-6 space-y-6">
    //   {/* Campaigns Section */}
    //   <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    //     <div className="lg:col-span-2">
    //       <Card>
    //         <CardHeader className="flex flex-row items-center justify-between">
    //           <div>
    //             <CardTitle>Campaigns</CardTitle>
    //           </div>
    //           <DropdownMenu>
    //             <DropdownMenuTrigger asChild>
    //               <Button variant="outline" size="sm">
    //                 All Campaigns <ChevronDown className="ml-2 h-4 w-4" />
    //               </Button>
    //             </DropdownMenuTrigger>
    //             <DropdownMenuContent>
    //               <DropdownMenuItem>All Campaigns</DropdownMenuItem>
    //               <DropdownMenuItem>Active</DropdownMenuItem>
    //               <DropdownMenuItem>Inactive</DropdownMenuItem>
    //             </DropdownMenuContent>
    //           </DropdownMenu>
    //         </CardHeader>
    //         <CardContent className="space-y-4">
    //           {CAMPAIGNS.map((campaign) => (
    //             <div
    //               key={campaign.name}
    //               className="flex items-center justify-between py-2"
    //             >
    //               <span className="font-medium">{campaign.name}</span>
    //               <Badge
    //                 variant="secondary"
    //                 className="bg-green-100 text-green-700"
    //               >
    //                 {campaign.status}
    //               </Badge>
    //             </div>
    //           ))}
    //         </CardContent>
    //       </Card>
    //     </div>

    //     {/* Recent Activity */}
    //     <Card>
    //       <CardHeader className="flex flex-row items-center justify-between">
    //         <CardTitle>Recent Activity</CardTitle>
    //         <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <Button variant="outline" size="sm">
    //               Most Recent <ChevronDown className="ml-2 h-4 w-4" />
    //             </Button>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent>
    //             <DropdownMenuItem>Most Recent</DropdownMenuItem>
    //             <DropdownMenuItem>Oldest First</DropdownMenuItem>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       </CardHeader>
    //       <CardContent className="space-y-4">
    //         {RECENT_ACTIVITY.map((activity, index) => (
    //           <div key={index} className="flex items-start gap-3">
    //             <Avatar className="h-8 w-8">
    //               <AvatarImage src="/placeholder.svg?height=32&width=32" />
    //               <AvatarFallback>{activity.name.charAt(0)}</AvatarFallback>
    //             </Avatar>
    //             <div className="flex-1 min-w-0">
    //               <div className="flex items-center justify-between">
    //                 <p className="text-sm font-medium truncate">
    //                   {activity.name}
    //                 </p>
    //                 <Badge variant="secondary" className={activity.statusColor}>
    //                   {activity.status}
    //                 </Badge>
    //               </div>
    //               <p className="text-xs  truncate">{activity.title}</p>
    //               <p className="text-xs ">{activity.campaign}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </CardContent>
    //     </Card>
    //   </div>

    //   {/* LinkedIn Accounts Section */}
    //   <Card>
    //     <CardHeader>
    //       <CardTitle>LinkedIn Accounts</CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       <div className="space-y-4">
    //         <div className="grid grid-cols-4 gap-4 text-sm font-medium  border-b pb-2">
    //           <div>Account</div>
    //           <div>Status</div>
    //           <div>Requests</div>
    //           <div></div>
    //         </div>
    //         {ACCOUNTS.map((account, index) => (
    //           <div
    //             key={index}
    //             className="grid grid-cols-4 gap-4 items-center py-3"
    //           >
    //             <div className="flex items-center gap-3">
    //               <Avatar className="h-8 w-8">
    //                 <AvatarImage src="/placeholder.svg?height=32&width=32" />
    //                 <AvatarFallback>{account.name.charAt(0)}</AvatarFallback>
    //               </Avatar>
    //               <div>
    //                 <p className="text-sm font-medium">{account.name}</p>
    //                 <p className="text-xs ">{account.email}</p>
    //               </div>
    //             </div>
    //             <Badge
    //               variant="secondary"
    //               className="bg-blue-100 text-blue-700 w-fit"
    //             >
    //               {account.status}
    //             </Badge>
    //             <div className="space-y-1">
    //               <div className="flex items-center justify-between text-sm">
    //                 <span>{account.requests}</span>
    //               </div>
    //               <Progress value={account.progress} className="h-2" />
    //             </div>
    //             <div className="flex justify-end">
    //               <DropdownMenu>
    //                 <DropdownMenuTrigger asChild>
    //                   <Button variant="ghost" size="sm">
    //                     <MoreHorizontal className="h-4 w-4" />
    //                   </Button>
    //                 </DropdownMenuTrigger>
    //                 <DropdownMenuContent>
    //                   <DropdownMenuItem>View Details</DropdownMenuItem>
    //                   <DropdownMenuItem>Edit Account</DropdownMenuItem>
    //                   <DropdownMenuItem className="text-red-600">
    //                     Disconnect
    //                   </DropdownMenuItem>
    //                 </DropdownMenuContent>
    //               </DropdownMenu>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </CardContent>
    //   </Card>
    // </div>
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (Campaigns + LinkedIn Accounts stacked) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Campaigns */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Campaigns</CardTitle>
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
              {CAMPAIGNS.map((campaign) => (
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

          {/* LinkedIn Accounts */}
          <Card>
            <CardHeader>
              <CardTitle>LinkedIn Accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-sm font-medium border-b pb-2">
                  <div>Account</div>
                  <div>Status</div>
                  <div>Requests</div>
                  <div></div>
                </div>
                {ACCOUNTS.map((account, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-4 items-center py-3"
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>
                          {account.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">{account.name}</p>
                        <p className="text-xs">{account.email}</p>
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

        {/* Right Column (Recent Activity only) */}
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
            {RECENT_ACTIVITY.map((activity, index) => (
              <div key={index} className="flex items-start gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{activity.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium truncate">
                      {activity.name}
                    </p>
                    <Badge variant="secondary" className={activity.statusColor}>
                      {activity.status}
                    </Badge>
                  </div>
                  <p className="text-xs truncate">{activity.title}</p>
                  <p className="text-xs">{activity.campaign}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
