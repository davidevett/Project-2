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
        limit: 20, // Limit of results
      },
    });

    const places = response.data.results;

    // Fetch details for each place including ratings
    for (const place of places) {
      const detailsEndpoint = `https://api.foursquare.com/v3/places/${place.fsq_id}`;
      const detailsResponse = await axios.get(detailsEndpoint, {
        headers: {
          Authorization: apiKey,
        },
      });

      // Log the details response to check if ratings are being fetched
      console.log('Details response:', detailsResponse.data);

      // Include rating in the place data
      place.rating = detailsResponse.data.rating || 'N/A'; // Default to 'N/A' if no rating
      place.description = detailsResponse.data.description || 'No description available'; // Add description if available

      // Fetch photos for each place
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