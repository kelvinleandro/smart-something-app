import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTcpSocket } from "@/context/TcpSocketContext";

const ConnectionStatusDot = () => {
  const { isClientConnected } = useTcpSocket();
  return (
    <MaterialIcons
      name="circle"
      size={28}
      color={isClientConnected ? "green" : "red"}
    />
  );
};

export default ConnectionStatusDot;