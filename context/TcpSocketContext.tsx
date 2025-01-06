import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import TcpSocket from "react-native-tcp-socket";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { messages } from "@/types/proto";
import { DeviceID, DeviceStatus } from "@/types/devices";
import { DEVICES_IDS } from "@/constants/Devices";

interface TcpSocketContextType {
  sendToServer: (message: string) => void;
  isClientConnected: boolean;
  devicesStatus: DeviceStatus[];
  getDeviceState: (id: number) => void;
  setDeviceState: (id: number, state: string) => void;
}

const TcpSocketContext = createContext<TcpSocketContextType | null>(null);

export const TcpSocketProvider = ({
  children,
  onReady,
}: {
  children: React.ReactNode;
  onReady?: () => void;
}) => {
  const [client, setClient] = useState<TcpSocket.Socket | null>(null);
  const [isClientConnected, setIsClientConnected] = useState<boolean>(false);
  const [devicesStatus, setDevicesStatus] = useState<DeviceStatus[]>([
    // { id: DeviceID.CAR_LOC, status: "Device Status Placeholder" },
    // { id: DeviceID.HEADLIGHT, status: "Device Status Placeholder" },
    // { id: DeviceID.AC, status: "Device Status Placeholder" },
  ]);

  const STORAGE_KEY = "devicesStatus";
  
  // load devicesStatus
  useEffect(() => {
    const loadDevicesStatus = async () => {
      try {
        const storedStatus = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedStatus) {
          setDevicesStatus(JSON.parse(storedStatus));
        }
      } catch (error) {
        console.error("Failed to load devicesStatus:", error);
      } finally {
        if (onReady) onReady();
      }
    };

    loadDevicesStatus();
  }, []);

  // save devicesStatus on unmount
  useEffect(() => {
    const saveDevicesStatusOnUnmount = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(devicesStatus));
      } catch (error) {
        console.error("Failed to save devicesStatus:", error);
      }
    };
  
    return () => {
      if (devicesStatus.length > 0) {
        saveDevicesStatusOnUnmount();
      }
    };
  }, []);

  useEffect(() => {
    const newClient = TcpSocket.createConnection(
      {
        host: process.env.EXPO_PUBLIC_GATEWAY_IP || "45.79.112.203",
        port: process.env.EXPO_PUBLIC_GATEWAY_PORT
          ? parseInt(process.env.EXPO_PUBLIC_GATEWAY_PORT, 10)
          : 4242,
      },
      () => {
        setIsClientConnected(true);
        console.log("Connected to server");
      }
    );

    newClient.on("data", (data: any) => {
      try {
        console.log("Client received a message!")
        const decoded = messages.ClientResponse.decode(new Uint8Array(data));
        console.log("Decoded Message:", decoded);

        // extracting device id and state
        const regex = /.*Device ID=([^,]+), (LastState|LastStateChanged)=(.+)/;
        const match = decoded.response.match(regex);

        console.log("Match:", match);

        if (match) {
          const deviceId = parseInt(match[1], 10);
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
      console.error("Connection error:", error);
    });

    newClient.on("close", () => {
      setIsClientConnected(false);
      console.log("Connection closed");
    });

    setClient(newClient);

    return () => {
      if (newClient) newClient.destroy();
    };
  }, []);

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

  const getDeviceState = (id: number, displayAlert: boolean = true) => {
    sendToServer(`GET_DEVICE_STATE|${id}`, displayAlert);
  };

  const setDeviceState = (id: number, state: string) => {
    sendToServer(`SET_DEVICE_STATE|${id}|${state}`);
  };

  // periodic GET request
  useEffect(() => {
    if (!client || !isClientConnected) return;
    const interval = setInterval(() => {
      // for (const id of DEVICES_IDS) {
      //   getDeviceState(id, false);
      // }
      getDeviceState(DeviceID.CAR_LOC, false);
    }, 5000);

    return () => clearInterval(interval);
  }, [client, isClientConnected]);

  return (
    <TcpSocketContext.Provider
      value={{
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
