import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BottomTabs from "@/components/BottomTabs";
import useTheme from "@/hooks/useTheme";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      tabBar={(props) => <BottomTabs {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.tabItemActive,
        tabBarInactiveTintColor: theme.tabItemInactive,
        tabBarActiveBackgroundColor: theme.tabBarBackground,
        tabBarInactiveBackgroundColor: theme.tabBarBackground,
        sceneStyle: {
          backgroundColor: theme.background,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Devices",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="devices" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Car Location",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="map-marker"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}
