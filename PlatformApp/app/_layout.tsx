import { Platform } from "react-native";
import { Slot, Tabs } from "expo-router";

export default function Layout() {
  if (Platform.OS === "web") {
    return (
      <div style={{ display: "flex" }}>
        <nav style={{ width: "200px", backgroundColor: "#f0f0f0" }}>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
        <main style={{ flex: 1 }}>
          <Slot />
        </main>
      </div>
    );
  }
  return <Tabs />;
}
