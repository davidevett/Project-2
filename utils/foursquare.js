const axios = require('axios');

const searchFoursquare = async (location, query) => {
  const apiKey = process.env.FOURSQUARE_API_KEY;
  const endpoint = 'https://api.foursquare.com/v3/places/search';

  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: apiKey,
      },
      params: {
        query,
        near: location,
        limit: 50, // limit of results
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching data from Foursquare API:', error);
    return [];
  }
};

module.exports = searchFoursquare;