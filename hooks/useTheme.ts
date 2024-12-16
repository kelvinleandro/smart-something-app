import { useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

const useTheme = () => {
  const theme = useColorScheme();

  return theme === "dark" ? Colors.dark : Colors.light;
};

export default useTheme;