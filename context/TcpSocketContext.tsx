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
  const [devicesStatus, setDevicesStatus] = useState<DeviceStatus[]>([]);

  const connectToServer = (host: string, port: number) => {
    const newClient = TcpSocket.createConnection({ host, port }, () => {
      setSocketConfig({ host, port });
      setIsClientConnected(true);
      console.log("Connected to server");
    });

    newClient.on("data", (data: any) => {
      try {
        console.log("Client received a message!");
        const decoded = messages.ClientResponse.decode(new Uint8Array(data));
        console.log("Decoded Message:", decoded);

        const regex = /.*Device ID=([^,]+), (LastState|LastStateChanged)=(.+)/;
        const match = decoded.response.match(regex);

        if (match) {
          const deviceId = match[1] as DeviceID;
          const lastState = match[3];

          console.log("Device ID:", deviceId);
          console.log("Last State:", lastState);

          setDevicesStatus((prevStatuses) => {
            const deviceIndex = prevStatuses.findIndex(
              (device) => device.id === deviceId
            );

            if (deviceIndex !== -1) {
              const updatedStatuses = [...prevStatuses];
              updatedStatuses[deviceIndex].status = lastState;
              return updatedStatuses;
            } else {
              return [...prevStatuses, { id: deviceId, status: lastState }];
            }
          });
        }
      } catch (err) {
        console.error("Failed to decode message:", err);
      }
    });

    newClient.on("error", (error) => {
      Alert.alert("Connection error:", JSON.stringify(error));
      console.error("Connection error:", error);
    });

    newClient.on("close", () => {
      setIsClientConnected(false);
      console.log("Connection closed");
    });

    setClient(newClient);
  };

  const reconnect = () => {
    if (socketConfig) {
      connectToServer(socketConfig.host, socketConfig.port);
    } else {
      console.error("No previous host or port to reconnect");
    }
  };

  const sendToServer = (message: string, displayAlert = true) => {
    if (!client || !isClientConnected) {
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
    sendToServer(`SET_DEVICE_STATE|${id}|${state}`);
  };

  // periodic GET request
  useEffect(() => {
    if (!client || !isClientConnected) return;
    const interval = setInterval(() => {
      for (const id of DEVICES_IDS) {
        if (id === DeviceID.CAR_LOC || Math.random() < 0.2) {
          getDeviceState(id, false);
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [client, isClientConnected]);

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
