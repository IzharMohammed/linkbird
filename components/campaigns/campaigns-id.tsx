import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function CampaignDetailsLoading() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-7 w-40 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-6 rounded-full" />
              </div>
              <Skeleton className="h-8 w-16 mt-4" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs value="overview">
        <TabsList className="grid w-full grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <TabsTrigger
              key={i}
              value={`tab-${i}`}
              disabled
              className="flex items-center gap-2"
            >
              <Skeleton className="h-4 w-4 rounded" />
              <Skeleton className="h-4 w-20" />
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Overview tab skeleton */}
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-5 w-32" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <Skeleton className="h-4 w-28" />
                      <Skeleton className="h-4 w-10" />
                    </div>
                    <Skeleton className="h-2 w-full rounded" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-5 w-32" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-5 w-5 rounded-full" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Leads tab skeleton */}
        <TabsContent value="leads" className="mt-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-32 mb-2" />
              <Skeleton className="h-4 w-48" />
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-12 gap-4 pb-4 border-b text-sm font-medium">
                <Skeleton className="h-4 w-24 col-span-4" />
                <Skeleton className="h-4 w-32 col-span-3" />
                <Skeleton className="h-4 w-20 col-span-2" />
                <Skeleton className="h-4 w-20 col-span-2" />
              </div>
              <div className="space-y-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-12 gap-4 py-3 rounded-lg"
                  >
                    <div className="col-span-4 flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div>
                        <Skeleton className="h-4 w-28 mb-1" />
                        <Skeleton className="h-3 w-20" />
                      </div>
                    </div>
                    <div className="col-span-3 flex items-center">
                      <Skeleton className="h-4 w-28" />
                    </div>
                    <div className="col-span-2 flex items-center">
                      <Skeleton className="h-4 w-20" />
                    </div>
                    <div className="col-span-2 flex items-center">
                      <Skeleton className="h-5 w-24 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Sequence tab skeleton */}
        <TabsContent value="sequence" className="mt-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-36 mb-2" />
              <Skeleton className="h-4 w-48" />
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Skeleton className="h-12 w-12 mx-auto mb-4 rounded-full" />
                <Skeleton className="h-4 w-40 mx-auto mb-2" />
                <Skeleton className="h-9 w-28 mx-auto rounded" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings tab skeleton */}
        <TabsContent value="settings" className="mt-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-5 w-36 mb-2" />
              <Skeleton className="h-4 w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Skeleton className="h-4 w-32 mb-2" />
                <Skeleton className="h-9 w-full rounded" />
              </div>
              <div>
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-9 w-full rounded" />
              </div>
              <Skeleton className="h-9 w-28" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
