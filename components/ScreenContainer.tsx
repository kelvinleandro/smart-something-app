import React from "react";
import { StyleSheet, useColorScheme, View, ViewProps } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import useTheme from "@/hooks/useTheme";

const ScreenContainer = ({ children, style, ...props }: ViewProps) => {
  const colorScheme = useColorScheme() || "dark";
  const theme = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.8 }}
        colors={[theme.background, theme.background, theme.background2]}
        style={{ flex: 1 }}
      >
        <BlurView intensity={50} style={StyleSheet.absoluteFillObject} tint={colorScheme}>
          <View style={[{ flex: 1 }, style]} {...props}>
            {children}
          </View>
        </BlurView>
      </LinearGradient>
    </GestureHandlerRootView>
  );
};

export default ScreenContainer;
