import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import switchTheme from "react-native-theme-switch-animation";
import { useScheme } from "@/hooks/useScheme";
import useTheme from "@/hooks/useTheme";

const ColorSchemeButton = () => {
  const { currentColorScheme, toggle } = useScheme();
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={(e) => {
        e.currentTarget.measure((x1, y1, width, height, px, py) => {
          switchTheme({
            switchThemeFunction: () => {
              toggle();
            },
            animationConfig: {
              type: "fade",
              duration: 500,
              startingPoint: {
                cy: py + height / 2,
                cx: px + width / 2,
              },
            },
          });
        });
      }}
    >
      <Feather
        name={currentColorScheme === "dark" ? "sun" : "moon"}
        size={32}
        color={theme.text}
      />
    </TouchableOpacity>
  );
};

export default ColorSchemeButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 36,
    right: 12,
  },
});
