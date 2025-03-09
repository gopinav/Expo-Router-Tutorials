import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AboutIOS() {
  return (
    <View style={styles.container}>
      <Text>iOS About Screen - Sleek and Simple!</Text>
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
