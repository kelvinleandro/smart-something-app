import { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  FlatList,
  Button,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DraggableFlatList, {
  ScaleDecorator,
  ShadowDecorator,
  OpacityDecorator,
  useOnCellActiveAnimation,
} from "react-native-draggable-flatlist";
import Animated, { LinearTransition } from "react-native-reanimated";
import useTheme from "@/hooks/useTheme";
import Dialog from "@/components/Dialog";
import DeviceCard from "@/components/DeviceCard";
import { useNavigation } from "expo-router";

export default function HomeScreen() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [devices, setDevices] = useState([
    { id: 1, deviceInfo: "Device 1" },
    { id: 2, deviceInfo: "Device 2" },
    { id: 3, deviceInfo: "Device 3" },
    { id: 4, deviceInfo: "Device 4" },
  ]);
  const navigation = useNavigation('/(tabs)');

  const handleOpenModal = () => {
    setOpen(true);
    navigation.setOptions({ tabBarStyle: { display: 'none' } });
  };

  const handleCloseModal = () => {
    setOpen(false);
    navigation.setOptions({ tabBarStyle: { display: undefined } });
  };

  const renderItem = ({ item }: any) => (
    // <ScaleDecorator>
    //   <OpacityDecorator activeOpacity={0.7}>
    //     <ShadowDecorator>
          <DeviceCard
            deviceInfo={item.deviceInfo}
            onSelect={handleOpenModal}
            // onLongPress={drag}
            style={{
              // elevation: isActive ? 5 : 0,
              width: '48%',
            }}
          />
    //     </ShadowDecorator>
    //   </OpacityDecorator>
    // </ScaleDecorator>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: theme.text }]}>My Devices</Text>
        <TouchableHighlight
          onPress={handleOpenModal}
          activeOpacity={1}
          underlayColor={theme.tabBarBackground}
        >
          <View style={[styles.findDevice, { borderColor: theme.text }]}>
            <Text style={[styles.findText, { color: theme.text }]}>
              Find Device
            </Text>
          </View>
        </TouchableHighlight>

        {/* <Button title="Hide tab" onPress={() => navigation.setOptions({ tabBarStyle: { display: 'none'} })} /> */}

        {/* <DraggableFlatList
          data={devices}
          numColumns={2}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          onDragEnd={({ data }) => setDevices(data)}
          contentContainerStyle={styles.devices}
          columnWrapperStyle={styles.columnWrapper}
        /> */}

        <FlatList
          numColumns={2}
          data={devices}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={styles.devices}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />

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
      </View>
    </GestureHandlerRootView>
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
});
