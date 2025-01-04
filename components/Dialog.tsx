import { StyleProp, StyleSheet, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import Animated, {
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import React from "react";
import useTheme from "@/hooks/useTheme";

interface DialogContentProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

type DialogProps = {
  children: React.ReactElement<DialogContentProps>;
  onClose: () => void;
  isOpen: boolean;
};

const Dialog = ({ children, onClose, isOpen }: DialogProps) => {
  return (
    isOpen && (
      <Animated.View
        entering={ZoomIn.duration(150)}
        exiting={ZoomOut.duration(150)}
        style={[
          styles.container,
        ]}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay}>{children}</View>
        </TouchableWithoutFeedback>
      </Animated.View>
    )
  );
};

Dialog.Content = ({ children, style }: DialogContentProps) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.content, { backgroundColor: theme.background }, style]}
      onStartShouldSetResponder={() => true}
    >
      {children}
    </View>
  );
};

export default Dialog;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 9999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  content: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
});
