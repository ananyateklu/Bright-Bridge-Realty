import axios from 'axios';

const fetchFeaturedListings = async (): Promise<[string[], any[], any[]]> => {
  const featuredListingProperties = {
    method: 'GET',
    url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
    params: {
      location: 'Minneapolis, MN',
      status_type: 'ForSale',
      home_type: 'Houses, Condos, Apartments',
      minPrice: '300000',
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };

  const openHouseOnlyProperties = {
    method: 'GET',
    url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
    params: {
      location: 'Minneapolis, MN',
      status_type: 'ForSale',
      home_type: 'Houses, Condos, Apartments',
      minPrice: '300000',
      isOpenHousesOnly: 'true'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
    },
  };
  

  function wait(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000); // 3 seconds in milliseconds
    });
  }



  try {
    const response = await axios.request(featuredListingProperties);
    const data = response.data.props;
    await wait();
    const response2 = await axios.request(openHouseOnlyProperties);
    const data2 = response2.data.props;
    // Get the image URLs for the first 5 listings
    const imageUrls = data.slice(1, 6).map((listing: any) => listing.imgSrc);
    const isOpenHousesOnly = data2.slice(1, 15);
    const imageUrLsPlusDetails: [string[], any[], any[]] = [imageUrls, data.slice(5, 10), isOpenHousesOnly]; // Specify the type explicitly
    console.log(imageUrLsPlusDetails);
    return imageUrLsPlusDetails; // Return the imageUrLsPlusDetails array
  } catch (error) {
    console.error(error);
    return [[], [], []];
  }
};

export default fetchFeaturedListings;
