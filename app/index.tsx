import React, { useState } from "react";
import { Text, TextInput, StyleSheet, Alert, Pressable } from "react-native";
import { useTcpSocket } from "@/context/TcpSocketContext";
import ScreenContainer from "@/components/ScreenContainer";
import useTheme from "@/hooks/useTheme";

const ConnectScreen = () => {
  const theme = useTheme();
  const { connectToServer } = useTcpSocket();
  const [host, setHost] = useState("");
  const [port, setPort] = useState("");

  const handleConnect = () => {
    if (!host || !port) {
      Alert.alert("Please enter both host and port");
      return;
    }
    connectToServer(host, parseInt(port, 10));
  };

  return (
    <ScreenContainer style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>
        Connect to Server:
      </Text>
      <TextInput
        style={[styles.input, { color: theme.text }]}
        placeholder="Host"
        placeholderTextColor={theme.text}
        value={host}
        onChangeText={setHost}
      />
      <TextInput
        style={[styles.input, { color: theme.text }]}
        placeholder="Port"
        placeholderTextColor={theme.text}
        value={port}
        onChangeText={setPort}
        keyboardType="numeric"
      />
      <Pressable
        onPress={handleConnect}
        style={[styles.button, { backgroundColor: theme.cardBackground }]}
      >
        <Text style={[styles.buttonText, { color: theme.text }]}>Connect</Text>
      </Pressable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    padding: 12,
    borderRadius: 12,
    overflow: "hidden",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 500,
  },
});

export default ConnectScreen;
