import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";

import { ThemedView } from "@/components/ThemedView";
import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";
import { HeaderProps } from "@/constants/Header";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "../ThemedText";

const HEADER_HEIGHT = 150;

type Props = PropsWithChildren<{
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function ParallaxScrollView({
  children,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? "light";
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const bottom = useBottomTabOverflow();
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <ThemedView style={styles.container}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        scrollIndicatorInsets={{ bottom }}
        contentContainerStyle={{ paddingBottom: bottom }}
      >
        <Animated.View
          style={[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}
        >
          <ThemedText type="title" style={styles.headerTitle}>
            {HeaderProps.title}
          </ThemedText>
          <ThemedText type="title" style={styles.headerCountRound}>
            {HeaderProps.titleCountRound}
          </ThemedText>
        </Animated.View>
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
    justifyContent: "space-between",
    alignItems: "flex-end",
    flexDirection: "row",
  },
  headerTitle: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontSize: 26,
  },
  headerCountRound: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
