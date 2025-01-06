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

type ColorScheme = "light" | "dark";

type ColorSchemeContextType = {
  currentColorScheme: ColorScheme;
  toggle: () => void;
};

export const ColorSchemeContext = createContext<ColorSchemeContextType | null>(null);

export const ColorSchemeProvider = ({ children, onReady }: { children: React.ReactNode, onReady?: () => void }) => {
  const deviceColorScheme = useColorScheme();
  const [currentColorScheme, setCurrentScheme] = useState<ColorScheme>("dark");

  // on app startup
  useEffect(() => {
    const loadColorScheme = async () => {
      try {
        const savedColorScheme = await AsyncStorage.getItem("colorScheme");
        if (savedColorScheme) {
          setCurrentScheme(savedColorScheme as ColorScheme);
        }
      } catch (error) {

      } finally {
        if (onReady) onReady();
      }
    }
    
    loadColorScheme();
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

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style={currentColorScheme === "light" ? "dark" : "light"} />
      <ColorSchemeContext.Provider value={{ currentColorScheme, toggle }}>
        {children}
      </ColorSchemeContext.Provider>
    </View>
  );
};