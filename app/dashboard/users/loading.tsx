'use client';
    
export default function Loading() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="space-y-4">
        {[1,4, 2, 3].map((i) => (
          <div key={i} className="p-4 border rounded-lg animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
} 