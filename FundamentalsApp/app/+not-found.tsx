import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function CustonNotFound() {
  return (
    <View style={styles.container}>
      <Text>CustonNotFound</Text>
      <Link href="/">Go to home!</Link>
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
