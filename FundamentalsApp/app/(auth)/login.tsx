import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function Login() {
  const loginHandler = () => {
    router.replace("/profile");
  };
  return (
    <View style={styles.container}>
      <Button title="Login" onPress={loginHandler} />
      <Link href="./register">Register</Link>
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
