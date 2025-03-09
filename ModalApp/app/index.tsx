import { View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/modal">Open Modal</Link>
      <Link href="/webmodal">Open Web Modal</Link>
    </View>
  );
}
