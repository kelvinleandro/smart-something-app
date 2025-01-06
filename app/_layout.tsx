import { useState, useEffect } from "react";
import { Stack } from "expo-router/stack";
import * as SplashScreen from 'expo-splash-screen';
import { ColorSchemeProvider } from "@/context/ColorSchemeContext";
import { TcpSocketProvider } from "@/context/TcpSocketContext";

export default function Layout() {
  const [isColorSchemeReady, setColorSchemeReady] = useState(false);
  const [isTcpSocketReady, setTcpSocketReady] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  useEffect(() => {
    if (isColorSchemeReady && isTcpSocketReady) {
      SplashScreen.hideAsync();
    }
  }, [isColorSchemeReady, isTcpSocketReady]);
  
  return (
    <ColorSchemeProvider onReady={() => setColorSchemeReady(true)}>
      <TcpSocketProvider onReady={() => setTcpSocketReady(true)}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </TcpSocketProvider>
    </ColorSchemeProvider>
  );
}
