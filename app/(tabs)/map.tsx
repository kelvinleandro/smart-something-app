import React, { useCallback, useEffect, useState } from "react";
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
  const [isFocused, setIsFocused] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  const [carLoc, setCarLoc] = useState({
    latitude: -3.742008,
    longitude: -38.574889,
  });

  // updating carLoc based on devicesStatus
  useEffect(() => {
    const device = devicesStatus.find((d) => d.id === DeviceID.CAR_LOC);
    if (device) {
      const splitted = device.status.split("|");
      const longitude = Number(splitted[0]);
      const latitude = Number(splitted[1]);
      if (!isNaN(latitude) && !isNaN(longitude)) {
        setCarLoc({ latitude, longitude });
      }
    }
  }, [devicesStatus]);

  // Simulated movement
  // useFocusEffect(
  //   useCallback(() => {
  //     const interval = setInterval(() => {
  //       setCarLoc((prev) => ({
  //         latitude: prev.latitude + 0.0001,
  //         longitude: prev.longitude + 0.0001,
  //       }));
  //     }, 2000);

  //     return () => clearInterval(interval);
  //   }, [])
  // );

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
            Car Location
          </Text>

          <MapView
            style={styles.mapContainer}
            onMapReady={() => setMapReady(true)}
            pitchEnabled={false}
            scrollEnabled={false}
            zoomEnabled={false}
            rotateEnabled={false}
            showsCompass={true}
            region={{
              ...carLoc,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            }}
          >
            {mapReady && (
              <Marker coordinate={carLoc} title="Your car">
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png",
                  }}
                  style={styles.mapPin}
                />
              </Marker>
            )}
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
