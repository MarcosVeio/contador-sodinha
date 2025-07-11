// PressableButton.js
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type PressableButtonProps = {
  onPress: () => void;
  title?: string;
  iconName?: string;
  iconSize?: number;
  iconColor?: string;
  backgroundColor?: string;
  textColor?: string;
  style?: object;
};

const PressableButton = ({
  onPress,
  title,
  iconName,
  iconSize = 20,
  iconColor,
  backgroundColor,
  textColor,
  style,
}: PressableButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor },
        pressed && styles.pressed,
        style,
      ]}
    >
      <View style={styles.content}>
        {iconName && (
          <Icon
            name={iconName}
            size={iconSize}
            color={iconColor}
            style={styles.icon}
          />
        )}
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.97 }],
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginHorizontal: 6,
  },
});

export default PressableButton;
