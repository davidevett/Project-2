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
        limit: 50, // Limit of results
      },
    });

    const places = response.data.results;

    // Fetch photos for each place
    for (const place of places) {
      const photoEndpoint = `https://api.foursquare.com/v3/places/${place.fsq_id}/photos`;
      const photoResponse = await axios.get(photoEndpoint, {
        headers: {
          Authorization: apiKey,
        },
      });
      place.photos = photoResponse.data;
    }

    return places;
  } catch (error) {
    console.error('Error fetching data from Foursquare API:', error);
    return [];
  }
};

module.exports = searchFoursquare;