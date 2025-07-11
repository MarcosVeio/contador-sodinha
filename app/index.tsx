import { StyleSheet } from "react-native";

import CardComponent from "@/components/Card";
import ParallaxScrollView from "@/components/Header/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#151718" }}
    >
      <ThemedView style={styles.titleContainer}>
        <CardComponent
          title="Jogador 1"
          description="This is a description of the card."
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
