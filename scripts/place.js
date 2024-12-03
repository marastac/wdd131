// Calculate wind chill
function calculateWindChill(temperature, windSpeed) {
  if (temperature <= 10 && windSpeed > 4.8) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
  } else {
    return "N/A";
  }
}

// Update wind chill in the HTML
const windChillElement = document.getElementById("wind-chill");
const windChill = calculateWindChill(10, 5);
windChillElement.textContent = windChill.toFixed(1) + "°C";

// Update footer with current year and last modification date
const footerYear = document.querySelector("footer p:first-child");
const footerDate = document.querySelector("footer p:last-child");

const currentYear = new Date().getFullYear();
footerYear.textContent = `©${currentYear} Rubia Magdelena Francesco 🌺 Madagascar`;

const lastModified = new Date(document.lastModified);
footerDate.textContent = `Last Modification: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;