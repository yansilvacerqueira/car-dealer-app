"use client";

import Error from "@/components/error/error";
import { FilterForm } from "@/components/vehicles/FilterForm";
import { FilterFormSkeleton } from "@/components/vehicles/FilterFormSkeleton";
import { useVehicles } from "@/hooks/useVehicles";

export default function HomePage() {
  const { makes, loading, error } = useVehicles();

  if (error) {
    return <Error minimal />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-6">
        {loading ? (
          <FilterFormSkeleton />
        ) : (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <FilterForm makes={makes} loading={loading} />
          </div>
        )}
      </div>
    </div>
  );
}
