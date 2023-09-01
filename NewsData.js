import axios from 'axios';

const apiKey = '6efdc73835ee4bd195ee5e9df5715648';

// const url = 'https://newsapi.org/v2/top-headlines?' +
// 'country=us&' +
// 'apiKey=6efdc73835ee4bd195ee5e9df5715648';

const baseUrl = 'https://newsapi.org/v2/top-headlines';

// prop category for category seach on categories
const fetchNewsArticles = async (category) => {
  try {
    // Make request
    const response = await axios.get(`${baseUrl}?category=${category}&apiKey=${apiKey}`);
    return response.data.articles;
  } catch (error) {
    console.error('Error cannot fetch news articles:', error);
    return [];
  }
};
