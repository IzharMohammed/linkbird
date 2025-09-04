
export default function LeadsLoading() {
  return (
    <div className="p-6">
      <div className="animate-pulse">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-medium text-gray-500">
          <div className="col-span-4">Name</div>
          <div className="col-span-3">Campaign Name</div>
          <div className="col-span-2">Activity</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-1"></div>
        </div>

        {/* Table Rows */}
        <div className="space-y-3 mt-4">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 py-3 items-center border-b border-gray-100"
            >
              {/* Name + Avatar */}
              <div className="col-span-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                <div className="space-y-2 w-2/3">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>

              {/* Campaign */}
              <div className="col-span-3">
                <div className="h-3 bg-gray-200 rounded w-2/3"></div>
              </div>

              {/* Activity */}
              <div className="col-span-2 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="w-2 h-6 rounded-sm bg-gray-200"></div>
                ))}
              </div>

              {/* Status */}
              <div className="col-span-2">
                <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
              </div>

              {/* Actions */}
              <div className="col-span-1 flex justify-end">
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
