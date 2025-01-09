export enum DeviceID {
  AC = "AC-1",
  CAR_LOC = "CL-1",
  HEADLIGHT = "HL-1"
}

export interface DeviceStatus {
  id: DeviceID;
  status: string;
}