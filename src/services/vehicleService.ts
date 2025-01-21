import { fetchApi } from "@/lib/api";
import type { ApiResponse, Make, Vehicle } from "@/types";

export class VehicleService {
  static async getMakes(): Promise<ApiResponse<Make>> {
    return fetchApi<Make>("/vehicles/GetMakesForVehicleType/car?format=json");
  }

  static async getModels(
    makeId: string,
    year: string
  ): Promise<ApiResponse<Vehicle>> {
    return fetchApi<Vehicle>(
      `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
  }
}
