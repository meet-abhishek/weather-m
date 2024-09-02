// ui.js This module manages the user interface, including displaying weather results.

export const displayWeather = (data, units) => {
    const result = `
        <div class="weather-container">
            <h2>Weather in ${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp}°${units === 'metric' ? 'C' : 'F'} (Feels like: ${data.main.feels_like}°)</p>
            <p><strong>Min Temp:</strong> ${data.main.temp_min}°</p>
            <p><strong>Max Temp:</strong> ${data.main.temp_max}°</p>
            <p><strong>Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>Pressure:</strong> ${data.main.pressure} hPa</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind:</strong> ${data.wind.speed} m/s at ${data.wind.deg}°</p>
            <p><strong>Visibility:</strong> ${data.visibility ? data.visibility : 'N/A'} meters</p>
            <p><strong>Cloudiness:</strong> ${data.clouds.all}%</p>
            <h6 style="padding: 10px">Last updated at: ${new Date().toLocaleTimeString()}</h6>
        </div>
    `;
    document.getElementById('weatherResult').innerHTML = result;
};

export const displayError = (errorMessage) => {
    document.getElementById('weatherResult').innerHTML = `<p>Error: ${errorMessage}</p>`;
};
