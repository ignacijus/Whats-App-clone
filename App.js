import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [count, setCount] = useState(0);

  function buttonPressIncrease() {
    setCount((prev) => prev + 1);
  }
  function buttonPressDecrease() {
    setCount((prev) => prev - 1);
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Button
          style={styles.MainButton}
          title="Increase number"
          onPress={buttonPressIncrease}
        />
        <Text id="number">{count}</Text>
        <StatusBar style="auto" />
        <Button
          style={styles.MainButton}
          title="Decrease number"
          onPress={buttonPressDecrease}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  MainButton: {
    borderRadius: 10,
    backgroundColor: "grey",
    width: 60,
    color: "grey",
  },
});
