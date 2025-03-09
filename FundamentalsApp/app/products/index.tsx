import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function ProductList() {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Link href="./1" relativeToDirectory>
        Product 1
      </Link>
      <Link href="/products/2">Product 2</Link>
      <Link href="/products/3">Product 3</Link>

      <Link href="/products/best-sellers/playstation" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Playstation</Text>
        </Pressable>
      </Link>
      <Link href="/products/category/electronics/laptop">Laptop</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#0ea5e9",
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});
