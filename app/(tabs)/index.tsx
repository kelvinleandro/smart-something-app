import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import useTheme from "@/hooks/useTheme";
import { useNavigation } from "expo-router";
import ScreenContainer from "@/components/ScreenContainer";
import ColorSchemeButton from "@/components/ColorSchemeButton";
import { useTcpSocket } from "@/context/TcpSocketContext";
import { DeviceID, DeviceStatus } from "@/types/devices";
import DeviceCard from "@/components/DeviceCard";
import { FlatList } from "react-native-gesture-handler";
import { TabsNavigationProp } from "@/types/tabs";
import DeviceDialog from "@/components/DeviceDialog";
import ConnectionStatus from "@/components/ConnectionStatus";

export default function HomeScreen() {
  const { devicesStatus } = useTcpSocket();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [device, setDevice] = useState<DeviceStatus | null>(null);
  const navigation = useNavigation<TabsNavigationProp>("/(tabs)");

  const handleOpenModal = () => {
    setOpen(true);
    navigation.setOptions({ tabBarStyle: { display: "none" } });
  };

  const handleCloseModal = () => {
    setOpen(false);
    navigation.setOptions({ tabBarStyle: { display: undefined } });
  };

  const renderItem = (item: DeviceStatus) => {
    const handleSelect = () => {
      if (item.id === DeviceID.CAR_LOC) {
        navigation.navigate("map");
      } else {
        setDevice(item);
        handleOpenModal();
      }
    };
    return (
      <DeviceCard deviceInfo={item} onSelect={handleSelect} style={styles.card} />
    );
  }

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.titleContainer}>
        <ConnectionStatus />
        <Text style={[styles.title, { color: theme.text }]}>My Devices</Text>
        <ColorSchemeButton />
      </View>

      <FlatList
        style={styles.devices}
        data={devicesStatus}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        ListEmptyComponent={() => (
          <Text style={{ color: theme.text }}>No devices found</Text>
        )}
      />

      <DeviceDialog isOpen={open} onClose={handleCloseModal} deviceInfo={device} />
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
  devices: {
    width: "100%",
    gap: 10,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  schemeButton: {
    position: "absolute",
    right: 6,
  },
  card: {
    width: "48%",
  }
});
