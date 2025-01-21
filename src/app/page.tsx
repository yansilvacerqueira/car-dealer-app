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
      <div className="mx-auto max-w-4xl p-6">
        {loading ? (
          <FilterFormSkeleton />
        ) : (
          <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <FilterForm makes={makes} loading={loading} />
          </div>
        )}
      </div>
    </div>
  );
}
