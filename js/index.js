// index.js This module serves as the entry point, integrating the API and UI modules and managing events.

import { getWeather } from './api.js';
import { displayWeather, displayError } from './ui.js';

let weatherUpdateInterval; // Variable to hold the interval ID

// EVENT LISTENER FOR BUTTON CLICK
document.getElementById('getWeatherBtn').addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value.trim();
    const unitsInput = document.querySelector('input[name="units"]:checked')?.value; // Get selected units

    // Clear any existing interval before setting a new one
    clearInterval(weatherUpdateInterval);

    if (cityInput) {
        const finalUnitsInput = unitsInput || 'metric'; // Default to 'metric' if no unit is selected
        getWeather(cityInput, finalUnitsInput)
            .then(data => displayWeather(data, finalUnitsInput))
            .catch(error => displayError(error.message));
        
        // Automatically update weather every 1 second
        weatherUpdateInterval = setInterval(() => {
            getWeather(cityInput, finalUnitsInput)
                .then(data => displayWeather(data, finalUnitsInput))
                .catch(error => displayError(error.message));
        }, 1000);
    } else {
        displayError("Please enter a valid city.");
    }
});

// CLEAR INPUT FIELD ON PAGE LOAD
window.addEventListener('load', () => {
    document.getElementById('cityInput').value = '';
});

// Initial call to fetch weather data immediately
getWeather('Kochi', 'metric')
    .then(data => displayWeather(data, 'metric'))
    .catch(error => displayError(error.message));
