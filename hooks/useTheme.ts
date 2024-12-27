import Colors from "@/constants/Colors";
import { useScheme } from "./useScheme";

const useTheme = () => {
  const {currentColorScheme} = useScheme();

  return currentColorScheme === "dark" ? Colors.dark : Colors.light;
};

export default useTheme;