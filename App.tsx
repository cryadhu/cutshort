import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import OverView from './src/screens/OverView';

export default function App() {

  const [loaded] = useFonts({
    'InterRegular': require('./assets/fonts/interRegular.ttf'),
    'InterBold': require('./assets/fonts/interBold.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <OverView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
