import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useTcpSocket } from "@/context/TcpSocketContext";

const ConnectionStatusDot = () => {
  const { clientStatus } = useTcpSocket();
  return (
    <MaterialIcons
      name="circle"
      size={28}
      color={clientStatus === "Connected" ? "green" : "red"}
    />
  );
};

export default ConnectionStatusDot;