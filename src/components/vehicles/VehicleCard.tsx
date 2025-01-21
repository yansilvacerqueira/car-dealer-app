import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Vehicle } from "@/types";
import { Car } from "lucide-react";

interface VehicleCardProps {
  vehicle: Vehicle;
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="h-5 w-5" />

          {vehicle.Model_Name}
        </CardTitle>

        <CardDescription>
          <span className="font-medium">{vehicle.Make_Name}</span>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="bg-gray-50 p-4 rounded-lg">
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">Make ID</dt>
              <dd className="text-sm text-gray-900">{vehicle.Make_ID}</dd>
            </div>

            <div>
              <dt className="text-sm font-medium text-gray-500">Model ID</dt>
              <dd className="text-sm text-gray-900">{vehicle.Model_ID}</dd>
            </div>
          </dl>
        </div>
      </CardContent>
    </Card>
  );
}
