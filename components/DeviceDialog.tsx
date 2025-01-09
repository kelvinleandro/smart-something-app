import { StyleSheet, Text, View, Switch } from "react-native";
import React, { useMemo } from "react";
import Dialog from "./Dialog";
import { DeviceID, DeviceStatus } from "@/types/devices";
import useTheme from "@/hooks/useTheme";
import { DEVICE_NAME } from "@/constants/Devices";
import { useTcpSocket } from "@/context/TcpSocketContext";
import AntDesign from "@expo/vector-icons/AntDesign";

const MIN_AC_LEVEL = 1;
const MAX_AC_LEVEL = 3;

interface Props {
  isOpen: boolean;
  onClose: () => void;
  deviceInfo: DeviceStatus | null;
}

const DeviceDialog = ({ isOpen, onClose, deviceInfo }: Props) => {
  if (!deviceInfo) return null;

  const { setDeviceState } = useTcpSocket();
  const theme = useTheme();

  const currentStatus = deviceInfo.id === DeviceID.HEADLIGHT
    ? deviceInfo.status
    : deviceInfo.status.split("|")[1];

  const isEnabled =
    deviceInfo.id === DeviceID.HEADLIGHT && deviceInfo.status === "on";

  const deviceName = DEVICE_NAME[deviceInfo.id];

  const handleSwitch = () => {
    setDeviceState(deviceInfo.id, isEnabled ? "off" : "on");
  };

  const handleIncrement = () => {
    if (currentStatus === `${MAX_AC_LEVEL}`) return;
    setDeviceState(deviceInfo.id, `AC|${parseInt(currentStatus, 10) + 1}|23`);
  };

  const handleDecrement = () => {
    if (currentStatus === `${MIN_AC_LEVEL}`) return;
    setDeviceState(deviceInfo.id, `AC|${parseInt(currentStatus, 10) - 1}|23`);
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Dialog.Content style={styles.dialogContent}>
        <View style={styles.container}>
          <Text style={[styles.title, { color: theme.text }]}>
            {deviceName}
          </Text>

          <Text style={[styles.dialogText, { color: theme.text }]}>
            Status:{" "}
            {deviceInfo.id === DeviceID.HEADLIGHT
              ? deviceInfo.status
              : `Temperature ${deviceInfo.status.split("|")[2]}º`}
          </Text>
          {deviceInfo.id === DeviceID.HEADLIGHT ? (
            <>
              <Text style={[styles.dialogText, { color: theme.text }]}>
                Switch headlight mode:
              </Text>
              <View style={styles.controlContainer}>
                <Text style={[styles.dialogText, { color: theme.text }]}>
                  OFF
                </Text>
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
                <Text style={[styles.dialogText, { color: theme.text }]}>
                  ON
                </Text>
              </View>
            </>
          ) : (
            // air conditioner
            <>
              <Text style={[styles.dialogText, { color: theme.text }]}>
                Air conditioner level:
              </Text>

              <View style={styles.controlContainer}>
                <AntDesign
                  name="minuscircle"
                  size={32}
                  color={
                    currentStatus === `${MIN_AC_LEVEL}`
                      ? theme.text
                      : theme.cardBackground
                  }
                  onPress={handleDecrement}
                />
                <Text style={[styles.dialogText, { color: theme.text }]}>
                  {currentStatus}
                </Text>
                <AntDesign
                  name="pluscircle"
                  size={32}
                  color={
                    currentStatus === `${MAX_AC_LEVEL}`
                      ? theme.text
                      : theme.cardBackground
                  }
                  onPress={handleIncrement}
                />
              </View>
            </>
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
    padding: 12,
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
  controlContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
