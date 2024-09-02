// api.js This module handles API requests to fetch weather data.

const apiKey = "3b9c7659c1e22086c869d3573489429a";

// FUNCTION EXPRESSION
export const getWeather = (city, units) => {
    console.log(`Fetching weather data for ${city} at ${new Date().toLocaleTimeString()}`);
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Unable to fetch weather data for the specified location.");
        }
        return response.json();
    });
};
