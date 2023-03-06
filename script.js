const apiKey = 'bdc2131cc7f24557d300007164a1a4d0'; // Replace with your API key from OpenWeatherMap
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const formEl = document.getElementById('location-form');
const locationInputEl = document.getElementById('location-input');
const forecastEl = document.getElementById('forecast');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = locationInputEl.value;
  getForecast(location);
});

async function getForecast(location) {
  try {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    forecastEl.innerHTML = `
      <h2>${location}</h2>
      <p>${description}</p>
      <p>${temperature} &deg;C</p>
      <img src="${iconUrl}" alt="${description}">
    `;
  } catch (error) {
    console.error('Error:', error);
    forecastEl.innerText = 'Failed to fetch forecast.';
  }
}
	// Replace YOUR_API_KEY with your actual API key from OpenWeatherMap
    const apiKey2 = 'bdc2131cc7f24557d300007164a1a4d0';

    // Define the cities we want to get weather for
    const cities = [
        { name: 'New York', countryCode: 'US' },
        { name: 'London', countryCode: 'GB' },
        { name: 'Tokyo', countryCode: 'JP' }
    ];

    // Loop through the cities and get their current weather data
    cities.forEach(city => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${city.countryCode}&appid=${apiKey2}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const temp = Math.round(data.main.temp);
                const description = data.weather[0].description;

                const weatherDiv = document.createElement('div');
                weatherDiv.innerHTML = `<h2>${city.name}</h2><p>${temp}&deg;C ${description}</p>`;
                document.getElementById('weather').appendChild(weatherDiv);
            })
            .catch(error => {
                console.error(error);
            });
    });