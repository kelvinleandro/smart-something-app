import { DeviceID } from "@/types/devices";

export const DEVICES_IDS = Object.values(DeviceID);

export const DEVICE_NAME: Record<DeviceID, string> = {
  [DeviceID.AC]: "Air Conditioner",
  [DeviceID.CAR_LOC]: "Car Location",
  [DeviceID.HEADLIGHT]: "Headlight",
};