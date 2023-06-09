import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ChatListScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Chat List Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => {
          props.navigation.navigate("ChatSettings");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatListScreen;
