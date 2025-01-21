import { useEffect, useState } from "react";

import { VehicleService } from "@/services/vehicleService";
import type { Make } from "@/types";

export function useVehicles() {
  const [makes, setMakes] = useState<Make[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMakes() {
      setLoading(true);
      try {
        const response = await VehicleService.getMakes();
        setMakes(response.Results);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch makes");
      } finally {
        setLoading(false);
      }
    }

    fetchMakes();
  }, []);

  return { makes, loading, error };
}
