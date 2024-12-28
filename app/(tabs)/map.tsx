import React, { useCallback, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "expo-router";
// import MapView, { Marker } from "react-native-maps";
import useTheme from "@/hooks/useTheme";
import ScreenContainer from "@/components/ScreenContainer";

export default function MapScreen() {
  const theme = useTheme();
  const [coordinate, setCoordinate] = useState({
    latitude: -3.742008,
    longitude: -38.574889,
  });
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
            Car Location{"\n"}Needs to add maps API key
          </Text>
          {/* <View style={styles.mapWrapper}>
            <MapView
              style={styles.map}
              region={{
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
              }}
            >
              <Marker coordinate={coordinate} title="Your car">
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Car_icon_alone.png",
                  }}
                  style={styles.mapPin}
                />
              </Marker>
            </MapView>
          </View> */}
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
  mapWrapper: {
    width: "80%",
    height: "50%",
    borderRadius: 12,
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
