import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useCallback } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ChatListScreen from "./screens/ChatListScreen";

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();

export default function App() {
  const [appIsLoaded, setAppIsLoaded] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Thin-Italic": require("./assets/fonts/Roboto-ThinItalic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    // <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ChatListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // /* </SafeAreaProvider> */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
