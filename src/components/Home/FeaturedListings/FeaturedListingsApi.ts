import axios from 'axios';

const fetchFeaturedListings = async (): Promise<[any[]]> => {
  // Define the API call
  const openHouseOnlyProperties = {
    method: 'GET',
    url: 'https://zillow-com1.p.rapidapi.com/propertyExtendedSearch',
    params: {
      location: 'Minneapolis, MN',
      status_type: 'ForSale',
      home_type: 'Houses, Condos, Apartments',
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
      }, 1000); // 3 seconds in milliseconds
    });
  }



  try { 
    const response = await axios.request(openHouseOnlyProperties);
    const data = response.data.props;
    await wait();
    const isOpenHousesOnly = data.slice(1, 15);
    const imageUrLsPlusDetails: [any[]] = [isOpenHousesOnly]; // Specify the type explicitly
    console.log(imageUrLsPlusDetails);
    return imageUrLsPlusDetails; // Return the imageUrLsPlusDetails array
  } catch (error) {
    console.error(error);
    return [[]];
  }
};

export default fetchFeaturedListings;
