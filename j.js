const apikey = "64fb0a4d26eec0b37b3189df8ed1ef47";
const url = `https://api.openweathermap.org/data/2.5/weather?q=roorkee&appid=${apikey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Use the data here as needed
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
