import { Stack } from "expo-router/stack";
import { ColorSchemeProvider } from "@/context/ColorSchemeContext";
import { TcpSocketProvider } from "@/context/TcpSocketContext";

export default function Layout() {
  return (
    <ColorSchemeProvider>
      <TcpSocketProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </TcpSocketProvider>
    </ColorSchemeProvider>
  );
}
