import { StyleSheet, View, Text, Pressable, TouchableHighlight } from 'react-native';
import useTheme from '@/hooks/useTheme';

export default function HomeScreen() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>My Devices</Text>

      <TouchableHighlight onPress={() => {}} activeOpacity={1} underlayColor={theme.tabBarBackground}>
        <View style={[styles.findDevice, { borderColor: theme.text }]}>
          <Text style={[styles.findText, { color: theme.text }]}>Find Device</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  findDevice: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    paddingHorizontal: 60,
    paddingVertical: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  findText: {
    fontSize: 18,
    fontWeight: '500',
  }
});
