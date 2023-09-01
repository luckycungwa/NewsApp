import React, {useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import axios from "axios";

const ArticleList = ({ route, navigation }) => {
  const { category } = route.params;
  // set up articles
  const [articles, setArticles] = useState([]);
  const apiKey = "6efdc73835ee4bd195ee5e9df5715648";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(apiKey);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.articleTitle}>Article Details</Text>
      <View style={styles.articleContainer}>
      {/* Flood with articles */}
        <FlatList
          data={articles}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            // navigate to chosen article Screen
            <TouchableOpacity
              style={styles.articleItem}
              onPress={() =>
                navigation.navigate("ArticleDetails", { article: item })
              }
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={styles.articleImage}
              />
              <Text style={styles.articleTitle}>{item.title}</Text>
              <Text style={styles.articleDescription}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE0E7",
  },
  articleItem: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: "#171717",
    borderRadius: 4,
  },
  articleImage: {
    width: "100%",
    height: 200,
    borderRadius: 4,
  },
  articleTitle: {
    color: "#DEE0E7",
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
  },
  articleDescription: {
    color: "#DEE0E7",
  },
  articleContainer: {
    gap: 8,
    flexDirection: "column",
    margin: 12,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderColor: "#DEE0E7", //for content loader 
    borderWidth: 1,
  },
});

export default ArticleList;
