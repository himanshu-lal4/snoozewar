import { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import SplashScreen from '../src/components/SplashScreen';
import { colors } from '../src/constants/theme';

export default function Index() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
