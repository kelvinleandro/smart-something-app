import React, { useState } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback, StyleSheet, useAnimatedValue } from 'react-native';

type DeviceCardProps = {
  deviceInfo: string;
  deviceImage: string;
  onPress: () => void;
  onLongPress: () => void;
  onPressOut: () => void;
};

const DeviceCard = () => {
  const scale = useAnimatedValue(1);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleLongPress = () => {
    Animated.spring(scale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
    setPopoverVisible(true);
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    setPopoverVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
      >
        <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
          <Text style={styles.cardText}>Card Content</Text>
        </Animated.View>
      </TouchableWithoutFeedback>

      {popoverVisible && (
        <View style={styles.popover}>
          <Text style={styles.popoverText}>Popover Content</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 200,
    height: 300,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    color: 'black',
  },
  popover: {
    position: 'absolute',
    top: 50,
    left: 50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  popoverText: {
    fontSize: 16,
    color: 'black',
  },
});

export default DeviceCard;
