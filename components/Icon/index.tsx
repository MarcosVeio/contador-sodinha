import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

type PropsIcon = {
  name?: string;
  size?: number;
  color?: string;
  background?: boolean;
  backgroundColor?: string;
  style?: object;
};

const IconComponent = ({
  name = "home",
  size = 30,
  color = "#333",
  background = false,
  backgroundColor = "#e5e7eb",
  style,
}: PropsIcon) => {
  return (
    <View
      style={[
        background && styles.iconWrapper,
        background && { backgroundColor },
        style,
      ]}
    >
      <Icon name={name} size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default IconComponent;
