import { LoadingSkeleton } from "@/components/ui/loadingSkeleton";
import { ResultHeader } from "@/components/vehicles/ResultHeader";
import { VehicleList } from "@/components/vehicles/VehicleList";
import { VehicleService } from "@/services/vehicleService";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{ makeId: string; year: string }>;
}

export default async function ResultPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { makeId, year } = resolvedParams;

  const data = await VehicleService.getModels(makeId, year);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="space-y-6">
          <ResultHeader year={year} />

          <Suspense fallback={<LoadingSkeleton />}>
            <VehicleList vehicles={data.Results} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
