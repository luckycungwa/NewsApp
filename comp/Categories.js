import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// Navigation
import ArticleList from "./ArticleList";

const Categories = ({ navigation }) => {
  //Array the category texts
  const categories = [
    { name: "Breaking News" },
    { name: "Politics" },
    { name: "Business & Finance" },
    { name: "Sports & Entertainment" },
    { name: "Other" },
  ];

  return (
    <View style={styles.categoryContainer}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.name}
          style={styles.categoryButton}
          //   Navigate to Article
          onPress={() =>
            navigation.navigate("ArticleList", { category: category.name })
          }
        >
          <Text style={styles.categoryText}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryButton: {
    padding: 12,
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#2424245",
  },
  categoryText: {
    fontSize: 12,
    letterSpacing: 1.2,
  },
  categoryContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
});

export default Categories;
