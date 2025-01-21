export interface Vehicle {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
}

export interface Make {
  MakeId: number;
  MakeName: string;
  VehicleTypeName: string;
}

export interface ApiResponse<T> {
  Count: number;
  Message: string;
  Results: T[];
}
