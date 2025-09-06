import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export default function CampaignsLoading() {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Campaigns</CardTitle>
              <p className="text-sm mt-1">
                Manage your campaigns and track their performance.
              </p>
            </div>
            <Button disabled className="bg-blue-600 text-white">
              <Skeleton className="h-4 w-4 mr-2 rounded" />
              Create Campaign
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-8 w-24 rounded-md" />
              ))}
            </div>
            <div className="flex-1 max-w-sm">
              <Skeleton className="h-9 w-full rounded-md" />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium">
            <div className="col-span-3">Campaign Name</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2">Total Leads</div>
            <div className="col-span-2">Request Status</div>
            <div className="col-span-2">Connection Status</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Body (Skeleton rows) */}
          <div className="space-y-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 py-4 rounded-lg">
                <div className="col-span-3 flex items-center">
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="col-span-2 flex items-center">
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
                <div className="col-span-2 flex items-center">
                  <Skeleton className="h-5 w-10 rounded-full" />
                </div>
                <div className="col-span-2 flex items-center gap-4">
                  <Skeleton className="h-5 w-10 rounded-full" />
                  <Skeleton className="h-5 w-10 rounded-full" />
                  <Skeleton className="h-5 w-10 rounded-full" />
                </div>
                <div className="col-span-2 flex items-center gap-4">
                  <Skeleton className="h-5 w-10 rounded-full" />
                  <Skeleton className="h-5 w-10 rounded-full" />
                </div>
                <div className="col-span-1 flex items-center justify-end">
                  <Skeleton className="h-6 w-6 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
