import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Animated, {
  FadeIn,
  FadeOut,
  ZoomIn,
  ZoomOut,
} from "react-native-reanimated";
import React from "react";
import useTheme from "@/hooks/useTheme";

interface DialogContentProps {
  children: React.ReactNode;
}

type DialogProps = {
  children: React.ReactElement<DialogContentProps>;
  onClose: () => void;
  isOpen: boolean;
};

const Dialog = ({ children, onClose, isOpen }: DialogProps) => {
  return (
    isOpen && (
      <TouchableWithoutFeedback onPress={onClose}>
        <Animated.View
          entering={FadeIn.duration(300)}
          exiting={ZoomOut.duration(300)}
          style={styles.container}
        >
          {children}
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  );
};

Dialog.Content = ({ children }: DialogContentProps) => {
  const theme = useTheme();

  return (
    <View
      style={[styles.content, { backgroundColor: theme.background }]}
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
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
});
