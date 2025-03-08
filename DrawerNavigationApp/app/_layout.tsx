import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#8b5cf6",
          drawerStyle: {
            backgroundColor: "#ffffff",
          },
          drawerActiveTintColor: "#8b5cf6",
          drawerInactiveTintColor: "#64748b",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="dashboard"
          options={{
            title: "My Dashboard",
            drawerLabel: "Dashboard",
            drawerIcon: ({ color }) => (
              <FontAwesome name="dashboard" size={24} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: "Settings",
            drawerIcon: ({ color }) => (
              <FontAwesome name="cog" size={24} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
