import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTcpSocket } from "@/context/TcpSocketContext";
import useTheme from "@/hooks/useTheme";

const ConnectionStatus = () => {
  const { isClientConnected, reconnect } = useTcpSocket();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <MaterialIcons
        name="circle"
        size={28}
        color={isClientConnected ? "green" : "red"}
      />
      <TouchableOpacity onPress={reconnect} style={styles.reconnectButton}>
        <MaterialIcons name="refresh" size={28} color={theme.text} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  reconnectButton: {
    marginLeft: 8,
    padding: 4,
  },
});

export default ConnectionStatus;