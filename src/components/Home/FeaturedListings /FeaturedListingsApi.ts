import axios from 'axios';

const fetchFeaturedListings = async (): Promise<[string[], any[]]> => {
  const options = {
    method: 'GET',
    url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
    params: {
      location: 'Minneapolis, MN',
      home_type: 'Houses, Condos, Apartments',
      minPrice: '300000',
    },
    headers: {
      'X-RapidAPI-Key': '5cecdd4475mshb15c34e799457b2p151503jsn581a088e90f4',
      'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    const data = response.data.props;
    // Get the image URLs for the first 5 listings
    const imageUrls = data.slice(5, 10).map((listing: any) => listing.imgSrc);
    const imageUrLsPlusDetails: [string[], any[]] = [imageUrls, data.slice(5, 10)]; // Specify the type explicitly
    console.log(imageUrLsPlusDetails);
    return imageUrLsPlusDetails; // Return the imageUrLsPlusDetails array
  } catch (error) {
    console.error(error);
    return [[], []];
  }
};

export default fetchFeaturedListings;
