function calculateWindChill(temp, windSpeed, unit = 'metric') {
    if (unit === 'metric') {
        return temp <= 10 && windSpeed > 4.8
            ? Math.round(13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)) + '°C'
            : 'N/A';
    } else {
        return temp <= 50 && windSpeed > 3
            ? Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)) + '°F'
            : 'N/A';
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Populate wind chill
    const temp = 28; // °C
    const windSpeed = 15; // km/h
    document.getElementById('windChill').textContent = calculateWindChill(temp, windSpeed, 'metric');

    // Footer data
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});
