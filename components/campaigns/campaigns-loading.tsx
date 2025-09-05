export default function CampaignsLoading() {
  return (
    <div className="p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-8 rounded w-1/4"></div>
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32  rounded"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
