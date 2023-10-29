var cityInput = document.querySelector('#city');
var search = document.querySelector('#search_btn');
var currentLocation = document.querySelector('#current_location_btn');
var currentLocDiv = document.querySelector('.current_details');
var weatherCardDiv = document.querySelector('.forecast');

//Set up the API key
var APIKey ="0b455ff5dc3592c1a67d676640facb10";




var geocoding = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}'