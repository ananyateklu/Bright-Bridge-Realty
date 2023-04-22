import axios from 'axios';

const fetchFeaturedListings = async (): Promise<[string[], any[], any[]]> => {
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

  const options2 = {
    method: 'GET',
    url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
    params: {
      location: 'Minneapolis, MN',
      home_type: 'Houses, Condos, Apartments',
      minPrice: '300000',
      isOpenHousesOnly: 'true'
    },
    headers: {
      'X-RapidAPI-Key': '5cecdd4475mshb15c34e799457b2p151503jsn581a088e90f4',
      'X-RapidAPI-Host': 'zillow-com1.p.rapidapi.com',
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
    const response = await axios.request(options);
    const data = response.data.props;
    await wait();
    const response2 = await axios.request(options2);
    const data2 = response2.data.props;
    // Get the image URLs for the first 5 listings
    const imageUrls = data.slice(5, 10).map((listing: any) => listing.imgSrc);
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
