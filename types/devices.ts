export enum DeviceID {
  AC = 1,
  CAR_LOC = 2,
  HEADLIGHT = 3
}

export interface DeviceStatus {
  id: DeviceID;
  status: string;
}