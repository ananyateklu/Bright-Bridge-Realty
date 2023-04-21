import axios from 'axios';

const fetchFeaturedListings = async (): Promise<string[]> => {
  const options = {
    method: 'GET',
    url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
    params: {
      location: 'Blaine',
      home_type: 'Houses, Condos, Apartments',
      minPrice: '400000',
    },
    headers: {
      'X-RapidAPI-Key': '5cecdd4475mshb15c34e799457b2p151503jsn581a088e90f4',
      'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data.props;
    console.log(data)
    // Get the image URLs for the first 5 listings
    const imageUrls = data.slice(0, 5).map((listing: any) => listing.imgSrc);

    return imageUrls;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchFeaturedListings;
