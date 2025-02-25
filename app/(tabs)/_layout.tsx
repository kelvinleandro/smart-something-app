import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import BottomTabs from "@/components/BottomTabs";
import useTheme from "@/hooks/useTheme";
import ScreenContainer from "@/components/ScreenContainer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <GestureHandlerRootView>
      <ScreenContainer>
        <Tabs
          tabBar={(props) => <BottomTabs {...props} />}
          screenOptions={{
            animation: "shift",
            headerShown: false,
            tabBarActiveTintColor: theme.tabItemActive,
            tabBarInactiveTintColor: theme.tabItemInactive,
            tabBarActiveBackgroundColor: theme.tabItemBackground,
            sceneStyle: {
              backgroundColor: theme.background,
            },
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
      </ScreenContainer>
    </GestureHandlerRootView>
  );
}
