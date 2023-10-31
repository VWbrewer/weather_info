const apiKey = '0b455ff5dc3592c1a67d676640facb10';

// listener for input
searchBtn.click(getGeocoding);

// A different click listener for search history buttons
$('#storage').click(btn);

cityInput.addEventListener("keyup", e => e.key === "Enter" && getCityCoordinates());