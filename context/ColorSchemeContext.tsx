import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  useColorScheme,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

type ColorScheme = "light" | "dark";

type ColorSchemeContextType = {
  currentColorScheme: ColorScheme;
  toggle: () => void;
};

export const ColorSchemeContext = createContext<ColorSchemeContextType | null>(null);

export const ColorSchemeProvider = ({ children }: { children: React.ReactNode }) => {
  const deviceColorScheme = useColorScheme();
  const [currentColorScheme, setCurrentScheme] = useState<ColorScheme>("dark");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible
  }, []);

  // on app startup
  useEffect(() => {
    (async () => {
      const savedColorScheme = await AsyncStorage.getItem("colorScheme");

      if (savedColorScheme) {
        setCurrentScheme(savedColorScheme as ColorScheme);
      } else {
        const systemColorScheme = deviceColorScheme || "dark";
        await AsyncStorage.setItem("colorScheme", systemColorScheme);
        setCurrentScheme(systemColorScheme);
      }

      setIsLoading(false);
      await SplashScreen.hideAsync();
    })();
  }, []);

  // when device color scheme changes
  useEffect(() => {
    if (deviceColorScheme !== currentColorScheme) {
      setCurrentScheme(deviceColorScheme as ColorScheme);
    }

  }, [deviceColorScheme]);


  const toggle = useCallback(
    async () => {
      const newColorScheme = currentColorScheme === "light" ? "dark" : "light";
      setCurrentScheme(newColorScheme);
      await AsyncStorage.setItem("colorScheme", newColorScheme);
    },
    [currentColorScheme]
  );

  if (isLoading) {
    // Optionally, you can return null here since the splash screen is handled by Expo
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={currentColorScheme === "light" ? "dark" : "light"} />
      <ColorSchemeContext.Provider value={{ currentColorScheme, toggle }}>
        {children}
      </ColorSchemeContext.Provider>
    </View>
  );
};