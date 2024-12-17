import { StyleSheet, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Animated, { FadeIn, FadeOut, LinearTransition, SlideInDown } from "react-native-reanimated";
import useTheme from "@/hooks/useTheme";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

const BottomTabs: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const theme = useTheme();

  return (
    <Animated.View
      entering={SlideInDown.duration(400)}
      style={[styles.container, { backgroundColor: theme.tabBarBackground }]}
    >
      {state.routes.map((route, index) => {
        if (["_sitemap", "+not-found"].includes(route.name)) return null;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <AnimatedTouchableOpacity
            layout={LinearTransition}
            key={route.key}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabItem,
              {
                backgroundColor: isFocused
                  ? theme.text
                  : "transparent",
              },
            ]}
            activeOpacity={0.75}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({
                focused: isFocused,
                color: isFocused
                  ? theme.tabBarBackground
                  : theme.text,
                size: 24,
              })}
            {isFocused && (
              <Animated.Text
                entering={FadeIn.duration(200)}
                exiting={FadeOut.duration(200)}
                style={[styles.text, { color: theme.tabBarBackground }]}
              >
                {label as string}
              </Animated.Text>
            )}
          </AnimatedTouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    bottom: 40,
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 14,
    // shadow effect in ios
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // shadow effect in android
    elevation: 5,
  },
  tabItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    paddingHorizontal: 12,
    borderRadius: 30,
  },
  text: {
    marginLeft: 8,
    fontWeight: "500",
  },
});
