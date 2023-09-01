import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import React from "react";
// Navigation stuff
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./comp/Home";
import ArticleList from "./comp/ArticleList";
import ArticleDetails from "./comp/ArticleDetails";

const Stack = createStackNavigator();

// Data handlinf from API


export default function App() {
  return (
    <NavigationContainer>
      <View>
        <Stack.Navigator initialRouteName="Home">
          {/* List of Screens/components for navigation */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ArticleList" component={ArticleList} />
          <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
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
