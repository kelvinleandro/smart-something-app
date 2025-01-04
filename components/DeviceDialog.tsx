import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useMemo, useState } from "react";
import Dialog from "./Dialog";
import { DeviceID, DeviceStatus } from "@/types/devices";
import useTheme from "@/hooks/useTheme";
import { DEVICE_NAME } from "@/constants/Devices";
import { useTcpSocket } from "@/context/TcpSocketContext";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  deviceInfo: DeviceStatus | null;
}

const DeviceDialog = ({ isOpen, onClose, deviceInfo }: Props) => {
  if (!deviceInfo) return null;

  const {setDeviceState} = useTcpSocket();
  const theme = useTheme();
  const isEnabled = useMemo(() => deviceInfo.status === "1", [deviceInfo]);

  const deviceName = DEVICE_NAME[deviceInfo.id];

  const handleSwitch = () => {
    setDeviceState(deviceInfo.id, isEnabled ? "0" : "1");
  };

  const handleIncrement = () => {
    setDeviceState(deviceInfo.id, (parseInt(deviceInfo.status) + 1).toString());
  };

  const handleDecrement = () => {
    setDeviceState(deviceInfo.id, (parseInt(deviceInfo.status) - 1).toString());
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Dialog.Content style={styles.dialogContent}>
        <View style={styles.container}>
          <Text style={[styles.title, { color: theme.text }]}>
            {deviceName}
          </Text>

          <Text style={[styles.dialogText, { color: theme.text }]}>
            Status: {deviceInfo.status}
          </Text>
          {deviceInfo.id === DeviceID.HEADLIGHT ? (
            <>
              <Text style={[styles.dialogText, { color: theme.text }]}>
                Switch headlight mode:
              </Text>
            <View style={styles.switchContainer}>
              <Text style={[styles.dialogText, { color: theme.text }]}>OFF</Text>
              <Switch
                trackColor={{
                  false: theme.switchTrackInactive,
                  true: theme.switchTrackActive,
                }}
                thumbColor={
                  isEnabled
                  ? theme.switchThumbActive
                  : theme.switchThumbInactive
                }
                onValueChange={handleSwitch}
                value={isEnabled}
              />
                  <Text style={[styles.dialogText, { color: theme.text }]}>ON</Text>
            </View>
            </>
          ) : (
            // air conditioner
            <Text style={[styles.dialogText, { color: theme.text }]}>Air</Text>
          )}
        </View>
      </Dialog.Content>
    </Dialog>
  );
};

export default DeviceDialog;

const styles = StyleSheet.create({
  dialogContent: {
    width: "100%",
  },
  container: {
    gap: 16,
  },
  dialogText: {
    fontSize: 24,
    fontWeight: "500",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
