import React from "react";
import { StyleSheet, ViewProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import useTheme from "@/hooks/useTheme";
import { useScheme } from "@/hooks/useScheme";
import { SafeAreaView } from "react-native-safe-area-context";

const ScreenContainer = ({ children, style, ...props }: ViewProps) => {
  const { currentColorScheme } = useScheme();
  const theme = useTheme();

  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0.8 }}
      colors={[theme.background, theme.background, theme.background2]}
      style={{ flex: 1 }}
    >
      <BlurView
        intensity={50}
        style={StyleSheet.absoluteFillObject}
        tint={currentColorScheme}
      >
        <SafeAreaView style={[{ flex: 1 }, style]} {...props}>
          {children}
        </SafeAreaView>
      </BlurView>
    </LinearGradient>
  );
};

export default ScreenContainer;
