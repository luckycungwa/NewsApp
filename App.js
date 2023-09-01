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
      <View style={styles.container}>
      {/* Top View */}
        <View style={styles.top}> </View>

{/* Middle/ main view */}
        <View style={styles.middle}>
          <Stack.Navigator initialRouteName="Home">
            {/* List of Screens/components for navigation */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ArticleList" component={ArticleList} />
            <Stack.Screen name="ArticleDetails" component={ArticleDetails} />
          </Stack.Navigator>
        </View>
{/* Bottom View */}
        <View style={styles.bottom}> </View>
      </View>

      <View></View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 12,
    margin: 0,
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "#ffb3bf",
    // borderWidth: 5,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
});
