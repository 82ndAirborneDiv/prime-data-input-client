// Adding specific devices for user testing by request from H&K and commenting out the randomization
//import { DEVICE_TYPES } from "../devices/constants";
//let randomDeviceId = Object.keys(DEVICE_TYPES)[1];

export const initialDevicesState = {
  deviceId2: {
    displayName: "BD Veritor",
    deviceManufacturer: "BD",
    deviceModel: "Veritor",
    isDefault: true,
  },
  deviceId3: {
    displayName: "Abbott Binax Now",
    deviceManufacturer: "Abbott",
    deviceModel: "Binax Now",
  },
};
