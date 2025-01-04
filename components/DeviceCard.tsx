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
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import useTheme from "@/hooks/useTheme";
import { DeviceID, DeviceStatus } from "@/types/devices";
import { DEVICE_NAME } from "@/constants/Devices";

type DeviceCardProps = {
  deviceInfo: DeviceStatus;
  onSelect: () => void;
  style?: StyleProp<AnimatedStyle<StyleProp<ViewStyle>>>;
};

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableHighlight);

const DeviceCard = ({
  deviceInfo,
  onSelect,
  style,
}: DeviceCardProps) => {
  const theme = useTheme();

  const deviceName = DEVICE_NAME[deviceInfo.id];

  const Icon = () => {
    switch (deviceInfo.id) {
      case DeviceID.AC:
        return <MaterialIcons name="air" size={40} color={theme.text} />;
      case DeviceID.HEADLIGHT:
        return <MaterialCommunityIcons name="car-light-high" size={40} color={theme.text} />;
      case DeviceID.CAR_LOC:
        return <MaterialCommunityIcons name="car-side" size={40} color={theme.text} />;
      default:
        return <MaterialIcons name="device-unknown" size={40} color={theme.text} />;
    }
  };

  return (
    <AnimatedTouchable
      onPress={onSelect}
      activeOpacity={1}
      underlayColor={theme.background2}
      style={[
        styles.touchable,
        { backgroundColor: theme.cardBackground },
        style,
      ]}
    >
      <Animated.View entering={FadeIn} style={styles.card}>
        <Icon />
        <Text style={[styles.cardText, { color: theme.text }]}>
          {deviceName}
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
