import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  console.log(typeof id);
  const numericId = parseInt(id as string, 10);
  console.log(typeof numericId);

  return (
    <View style={styles.container}>
      <Text>Details about product {id}</Text>
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
