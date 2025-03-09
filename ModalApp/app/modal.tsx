import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Modal() {
  return (
    <View style={styles.container}>
      <Text>Modal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
