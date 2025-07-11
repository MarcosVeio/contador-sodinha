import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AvatarInitials from "../Avatar";
import PressableButton from "../PressableButton";

type PropsCard = {
  title: string;
  description?: string;
  image?: string;
};

const CardComponent = ({ title, description, image }: PropsCard) => {
  return (
    <View style={styles.card}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <AvatarInitials name={title} size={40} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <PressableButton iconName="edit" onPress={() => alert("Editado!")} />
      </View>
      <View style={styles.content}>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: "hidden",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 180,
  },
  header: {
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 8,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
});

export default CardComponent;
