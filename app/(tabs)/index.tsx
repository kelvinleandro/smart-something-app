import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import useTheme from "@/hooks/useTheme";
import Dialog from "@/components/Dialog";
import { useNavigation } from "expo-router";
import ScreenContainer from "@/components/ScreenContainer";
import ColorSchemeButton from "@/components/ColorSchemeButton";
import { useTcpSocket } from "@/context/TcpSocketContext";

export default function HomeScreen() {
  const { sendToServer, response } = useTcpSocket();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const navigation = useNavigation("/(tabs)");

  const handleOpenModal = () => {
    setOpen(true);
    navigation.setOptions({ tabBarStyle: { display: "none" } });
  };

  const handleCloseModal = () => {
    setOpen(false);
    navigation.setOptions({ tabBarStyle: { display: undefined } });
  };

  const handleTestServer = () => {
    sendToServer("GET_DEVICE_STATE|1");
    console.log(response);
  };

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color: theme.text }]}>My Devices</Text>
        <ColorSchemeButton style={styles.schemeButton} />
      </View>

      <Button title="Test Button" onPress={handleTestServer} />

      <Dialog isOpen={open} onClose={handleCloseModal}>
        <Dialog.Content>
          <View style={{}}>
            <Text style={[styles.dialogText, { color: theme.text }]}>
              Name: Device name
            </Text>
            <Text style={[styles.dialogText, { color: theme.text }]}>
              Type: Device type
            </Text>
          </View>
        </Dialog.Content>
      </Dialog>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 12,
    paddingTop: 12,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  findDevice: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 60,
    paddingVertical: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: "dashed",
  },
  findText: {
    fontSize: 18,
    fontWeight: "500",
  },
  dialogText: {
    fontSize: 18,
    fontWeight: "500",
  },
  devices: {
    width: "100%",
    gap: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  schemeButton: {
    position: "absolute",
    right: 6,
  },
});
