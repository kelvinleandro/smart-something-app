import { useState, useEffect } from "react";
import { Stack } from "expo-router/stack";
import * as SplashScreen from "expo-splash-screen";
import { ColorSchemeProvider } from "@/context/ColorSchemeContext";
import { TcpSocketProvider, useTcpSocket } from "@/context/TcpSocketContext";
import { useRouter } from "expo-router";

const AppNavigator = () => {
  const { isClientConnected } = useTcpSocket();
  const router = useRouter();

  useEffect(() => {
    if (isClientConnected) {
      router.replace("/(tabs)");
    }
  }, [isClientConnected, router]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default function Layout() {
  const [isColorSchemeReady, setColorSchemeReady] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (isColorSchemeReady) {
      SplashScreen.hideAsync();
    }
  }, [isColorSchemeReady]);

  return (
    <ColorSchemeProvider onReady={() => setColorSchemeReady(true)}>
      <TcpSocketProvider>
        <AppNavigator />
      </TcpSocketProvider>
    </ColorSchemeProvider>
  );
}
