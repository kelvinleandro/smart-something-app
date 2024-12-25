import React from "react";
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  ViewStyle,
  StyleProp,
} from "react-native";
import Animated, { AnimatedStyle, FadeIn } from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import useTheme from "@/hooks/useTheme";

type DeviceCardProps = {
  deviceInfo?: string;
  onSelect: () => void;
  onLongPress?: () => void;
  style?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableHighlight);

const DeviceCard = ({
  deviceInfo,
  onSelect,
  onLongPress,
  style,
}: DeviceCardProps) => {
  const theme = useTheme();

  return (
    <AnimatedTouchable
      onPress={onSelect}
      onLongPress={onLongPress}
      activeOpacity={1}
      underlayColor={theme.background2}
      style={[
        styles.touchable,
        { backgroundColor: theme.cardBackground },
        style,
      ]}
    >
      <Animated.View entering={FadeIn} style={styles.card}>
        <MaterialIcons name="phone-iphone" size={40} color={theme.text} />
        <Text style={[styles.cardText, { color: theme.text }]}>
          {deviceInfo}
        </Text>
      </Animated.View>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  touchable: {
    width: "100%",
    borderRadius: 12,
  },
  card: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    height: 100,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default DeviceCard;
