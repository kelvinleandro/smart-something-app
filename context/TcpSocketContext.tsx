import React, { createContext, useContext, useEffect, useState } from "react";
import { Alert } from "react-native";
import TcpSocket from "react-native-tcp-socket";
import { messages } from "@/types/proto";
import { DeviceID, DeviceStatus } from "@/types/devices";
import { DEVICES_IDS } from "@/constants/Devices";

interface TcpSocketContextType {
  sendToServer: (message: string) => void;
  clientStatus: string;
  devicesStatus: DeviceStatus[];
  getDeviceState: (id: number) => void;
  setDeviceState: (id: number, state: string) => void;
}

const TcpSocketContext = createContext<TcpSocketContextType | null>(null);

export const TcpSocketProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [client, setClient] = useState<TcpSocket.Socket | null>(null);
  const [clientStatus, setClientStatus] = useState<string>("Disconnected");
  const [devicesStatus, setDevicesStatus] = useState<DeviceStatus[]>([
    { id: DeviceID.CAR_LOC, status: "Device Status Placeholder" },
    { id: DeviceID.HEADLIGHT, status: "Device Status Placeholder" },
    { id: DeviceID.AC, status: "Device Status Placeholder" },
  ]);

  useEffect(() => {
    const newClient = TcpSocket.createConnection(
      {
        host: process.env.EXPO_PUBLIC_GATEWAY_IP || "45.79.112.203",
        port: process.env.EXPO_PUBLIC_GATEWAY_PORT
          ? parseInt(process.env.EXPO_PUBLIC_GATEWAY_PORT, 10)
          : 4242,
      },
      () => {
        setClientStatus("Connected");
        console.log("Connected to server");
      }
    );

    newClient.on("data", (data: any) => {
      try {
        console.log("Received data:", data.toString());
        const decoded = messages.ClientResponse.decode(new Uint8Array(data));
        console.log("Decoded Message:", decoded);

        // extracting device id and state
        const regex = /.*Device ID=([^,]+), (LastState|LastStateChanged)=(.+)/;
        const match = decoded.response.match(regex);

        if (match) {
          const deviceId = parseInt(match[1], 10);
          const lastState = match[2];

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
      setClientStatus("Disconnected");
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
      console.log("Encoded Message:", encodedMessage);
      client.write(encodedMessage);
      console.log("Message sent successfully");
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
  // useEffect(() => {
  //   if (!client) return;
  //   const interval = setInterval(() => {
  //     for (const id of DEVICES_IDS) {
  //       getDeviceState(id, false);
  //     }
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [client]);

  return (
    <TcpSocketContext.Provider
      value={{
        sendToServer,
        clientStatus,
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
