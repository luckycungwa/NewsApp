import React from 'react';
import { View, Text } from 'react-native';
import Categories from './Categories';
import ArticleList from './ArticleList';

const Home = () => {
  return (
    <View>
      {/* <ArticleList/> */}
      <Categories/>
    </View>
  );
}

export default Home;
