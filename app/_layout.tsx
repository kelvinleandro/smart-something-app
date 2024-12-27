import { Stack } from "expo-router/stack";
import { ColorSchemeProvider } from "@/context/ColorSchemeContext";

export default function Layout() {
  return (
    <ColorSchemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ColorSchemeProvider>
  );
}
