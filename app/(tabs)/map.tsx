import React, { useCallback, useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { useFocusEffect } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import useTheme from "@/hooks/useTheme";
import ScreenContainer from "@/components/ScreenContainer";
import { useTcpSocket } from "@/context/TcpSocketContext";
import { DeviceID } from "@/types/devices";

export default function MapScreen() {
  const theme = useTheme();
  const { devicesStatus } = useTcpSocket();
  const carLoc = (() => {
    const device = devicesStatus.find((d) => d.id === DeviceID.CAR_LOC);
    if (device) {
      const splitted = device.status.split("|");
      return {
        latitude: parseFloat(splitted[0]),
        longitude: parseFloat(splitted[1]),
      };
    }

    // default location to show in map
    return {
      latitude: -3.742008,
      longitude: -38.574889,
    };
  })();

  const [isFocused, setIsFocused] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setIsFocused(true);
      return () => {
        setIsFocused(false);
      };
    }, [])
  );

  return (
    <ScreenContainer style={styles.container}>
      {isFocused && (
        <>
          <Text style={[styles.title, { color: theme.text }]}>
            Car Location{`\n${carLoc.latitude}, ${carLoc.longitude}`}
          </Text>

          <MapView
            style={styles.mapContainer}
            region={{
              latitude: carLoc.latitude,
              longitude: carLoc.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            }}
          >
            <Marker coordinate={carLoc} title="Your car">
              <Image
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png",
                }}
                style={styles.mapPin}
              />
            </Marker>
          </MapView>
        </>
      )}
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
  mapContainer: {
    width: "80%",
    height: "50%",
    borderRadius: 48,
    overflow: "hidden",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  mapPin: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
});
