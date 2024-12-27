import { useContext } from "react";
import { ColorSchemeContext } from "@/context/ColorSchemeContext";

export const useScheme = () => {
  const context = useContext(ColorSchemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};