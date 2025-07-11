import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type AvatarInitialsProps = {
  name: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
};

const AvatarInitials = ({
  name,
  size = 60,
  backgroundColor = Colors.dark.background,
  textColor = Colors.dark.text,
}: AvatarInitialsProps) => {
  const getInitials = (name: string) => {
    const words = name.trim().split(" ");
    if (words.length === 0) return "";
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    return (
      words[0].charAt(0).toUpperCase() +
      words[words.length - 1].charAt(0).toUpperCase()
    );
  };

  return (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: backgroundColor,
        },
      ]}
    >
      <Text style={[styles.text, { color: textColor, fontSize: size * 0.4 }]}>
        {getInitials(name)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
  },
});

export default AvatarInitials;
