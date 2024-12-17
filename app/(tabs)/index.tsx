import { StyleSheet, View, Text, TouchableHighlight, Button, Pressable } from 'react-native';
import useTheme from '@/hooks/useTheme';
import Dialog from '@/components/Dialog';
import { useState } from 'react';

export default function HomeScreen() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: theme.text }]}>My Devices</Text>

      <Pressable onPress={() => setOpen(true)}><Text style={{color: 'white'}}>Open dialog</Text></Pressable>

      <TouchableHighlight onPress={() => {}} activeOpacity={1} underlayColor={theme.tabBarBackground}>
        <View style={[styles.findDevice, { borderColor: theme.text }]}>
          <Text style={[styles.findText, { color: theme.text }]}>Find Device</Text>
        </View>
      </TouchableHighlight>

      <Dialog onClose={() => setOpen(false)} isOpen={open}>
          <Dialog.Content>
            <View style={{width:50, height: 50, backgroundColor: 'red'}}></View>
          </Dialog.Content>
      </Dialog>
      
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
