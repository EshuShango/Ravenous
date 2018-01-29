const apiKey = 'a3yN1ipY8lYzT9AZr8MlXksvfR278dZyeebOJvv92wduPgml526P8gbx4LofvKljNa4191p7HVZ_W7TjD8_CG1WsLLKjVdlNNG0rKYQE3CPPoPAgeOj6VepojUZqWnYx';
 const yelp = {
   search(term,location,sortBy) {


          return fetch(` https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy} `,{
           headers: {
       Authorization: `Bearer ${apiKey}`

     }
   }).then(response => {
      return response.json();`,{
        headers: {
      { Authorization: `Bearer ${apiKey}` }
    }
  }).then(response => {
    return response.json();
  }).then(jsonResponse => {
    if(jsonResponse.businesses){
      return jsonResponse.businesses.map(business => {
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.address,
        city: business.city,
        state: business.state ,
        zipCode: business.zipCode,
        category: business.category ,
        rating: business.rating,
        reviewCount: business.reviewCount
      });
    }
  });
    }
 };


export default yelp;
