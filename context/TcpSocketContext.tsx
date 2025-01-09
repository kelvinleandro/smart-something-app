import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import TcpSocket from "react-native-tcp-socket";
import { messages } from "@/types/proto";
import { DeviceID, DeviceStatus } from "@/types/devices";
import { DEVICES_IDS } from "@/constants/Devices";
import { SocketConn } from "@/types/conn";

interface TcpSocketContextType {
  connectToServer: (host: string, port: number) => void;
  reconnect: () => void;
  sendToServer: (message: string) => void;
  isClientConnected: boolean;
  devicesStatus: DeviceStatus[];
  getDeviceState: (id: DeviceID) => void;
  setDeviceState: (id: DeviceID, state: string) => void;
}

const TcpSocketContext = createContext<TcpSocketContextType | null>(null);

export const TcpSocketProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [socketConfig, setSocketConfig] = useState<SocketConn | null>(null);
  const [client, setClient] = useState<TcpSocket.Socket | null>(null);
  const [isClientConnected, setIsClientConnected] = useState<boolean>(false);
  const [devicesStatus, setDevicesStatus] = useState<DeviceStatus[]>([
    { id: DeviceID.CAR_LOC, status: "-3.742008|-38.574889" },
    { id: DeviceID.HEADLIGHT, status: "off" },
    { id: DeviceID.AC, status: "AC|3|23" },
  ]);

  const connectToServer = (host: string, port: number) => {
    setIsClientConnected(true);
  };

  const reconnect = () => {
    if (socketConfig) {
      connectToServer(socketConfig.host, socketConfig.port);
    } else {
      console.error("No previous host or port to reconnect");
    }
  };

  const sendToServer = (message: string, displayAlert = true) => {
    if (!client) {
      Alert.alert("Error", "Client not connected");
      return;
    }

    try {
      const request = messages.ClientMessage.create({ request: message });
      const encodedMessage = messages.ClientMessage.encode(request).finish();
      client.write(encodedMessage);
    } catch (err) {
      if (displayAlert) Alert.alert("Error", "Failed to send message");
      console.error("Failed to encode message:", err);
    }
  };

  const getDeviceState = (id: DeviceID, displayAlert: boolean = true) => {
    sendToServer(`GET_DEVICE_STATE|${id}`, displayAlert);
  };

  const setDeviceState = (id: DeviceID, state: string) => {
    console.log(state);
    setDevicesStatus((prevStatuses) => {
      const deviceIndex = prevStatuses.findIndex(
        (device) => device.id === id
      );

      if (deviceIndex !== -1) {
        const updatedStatuses = [...prevStatuses];
        updatedStatuses[deviceIndex].status = state;
        return updatedStatuses;
      } else {
        return [...prevStatuses, { id: id, status: state }];
      }
    });
  };

  return (
    <TcpSocketContext.Provider
      value={{
        connectToServer,
        reconnect,
        sendToServer,
        isClientConnected,
        devicesStatus,
        getDeviceState,
        setDeviceState,
      }}
    >
      {children}
    </TcpSocketContext.Provider>
  );
};

export const useTcpSocket = () => {
  const context = useContext(TcpSocketContext);
  if (!context) {
    throw new Error("useTcpSocket must be used within a TcpSocketProvider");
  }
  return context;
};
