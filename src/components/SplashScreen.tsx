import { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSpring,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

import { colors, fonts, fontSize } from '../constants/theme';

const { width } = Dimensions.get('window');

interface Props {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: Props) {
  const glowScale = useSharedValue(0.3);
  const glowOpacity = useSharedValue(0);
  const snoozeOpacity = useSharedValue(0);
  const snoozeX = useSharedValue(-20);
  const warOpacity = useSharedValue(0);
  const warX = useSharedValue(20);
  const taglineOpacity = useSharedValue(0);
  const taglineY = useSharedValue(10);
  const lineWidth = useSharedValue(0);
  const exitOpacity = useSharedValue(1);

  useEffect(() => {
    glowOpacity.value = withTiming(1, { duration: 400, easing: Easing.out(Easing.cubic) });
    glowScale.value = withTiming(1, { duration: 600, easing: Easing.out(Easing.cubic) });

    snoozeOpacity.value = withDelay(300, withTiming(1, { duration: 400 }));
    snoozeX.value = withDelay(300, withSpring(0, { damping: 15, stiffness: 120 }));

    warOpacity.value = withDelay(500, withTiming(1, { duration: 400 }));
    warX.value = withDelay(500, withSpring(0, { damping: 15, stiffness: 120 }));

    lineWidth.value = withDelay(
      800,
      withTiming(1, { duration: 400, easing: Easing.inOut(Easing.cubic) })
    );

    taglineOpacity.value = withDelay(1100, withTiming(1, { duration: 400 }));
    taglineY.value = withDelay(1100, withSpring(0, { damping: 15, stiffness: 100 }));

    exitOpacity.value = withDelay(2500, withTiming(0, { duration: 500 }));

    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, []);

  const glowStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value,
    transform: [{ scale: glowScale.value }],
  }));

  const snoozeStyle = useAnimatedStyle(() => ({
    opacity: snoozeOpacity.value,
    transform: [{ translateX: snoozeX.value }],
  }));

  const warStyle = useAnimatedStyle(() => ({
    opacity: warOpacity.value,
    transform: [{ translateX: warX.value }],
  }));

  const lineStyle = useAnimatedStyle(() => ({
    width: interpolate(lineWidth.value, [0, 1], [0, width * 0.5]),
    opacity: lineWidth.value,
  }));

  const taglineStyle = useAnimatedStyle(() => ({
    opacity: taglineOpacity.value,
    transform: [{ translateY: taglineY.value }],
  }));

  const containerStyle = useAnimatedStyle(() => ({
    opacity: exitOpacity.value,
  }));

  return (
    <Animated.View style={[styles.container, containerStyle]}>
      <Animated.View style={[styles.glowContainer, glowStyle]}>
        <LinearGradient
          colors={[colors.accentGlow, 'transparent']}
          style={styles.glow}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 0.5, y: 1 }}
        />
      </Animated.View>

      <View style={styles.brandContainer}>
        <View style={styles.nameRow}>
          <Animated.Text style={[styles.snooze, snoozeStyle]}>Snooze</Animated.Text>
          <Animated.Text style={[styles.war, warStyle]}>War</Animated.Text>
        </View>

        <View style={styles.lineContainer}>
          <Animated.View style={[styles.line, lineStyle]} />
        </View>

        <Animated.Text style={[styles.tagline, taglineStyle]}>Own your morning</Animated.Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowContainer: {
    position: 'absolute',
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glow: {
    width: 300,
    height: 300,
    borderRadius: 150,
  },
  brandContainer: {
    alignItems: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  snooze: {
    fontFamily: fonts.display,
    fontSize: 42,
    color: colors.textPrimary,
    letterSpacing: -1,
  },
  war: {
    fontFamily: fonts.display,
    fontSize: 42,
    color: colors.accent,
    letterSpacing: -1,
  },
  lineContainer: {
    height: 2,
    marginTop: 12,
    alignItems: 'center',
  },
  line: {
    height: 2,
    backgroundColor: colors.accent,
    borderRadius: 1,
  },
  tagline: {
    fontFamily: fonts.bodyMedium,
    fontSize: fontSize.sm,
    color: colors.textSecondary,
    marginTop: 16,
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
});
