// Declare a variable to hold the API key
var apiKey = "628d57f32262d7f6c272be5df6242e8e";

// Declare a function called currentWeather
function currentWeather(){
// Get the user's current location coordinates
  navigator.geolocation.getCurrentPosition(function (position){
// Store the user's longitude and latitude coordinates
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

// Build the query URL for the OpenWeatherMap API using the user's coordinates and API key
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" +  apiKey;

// Use jQuery's AJAX method to make an API request to the OpenWeatherMap API with the built URL
 $.ajax({
  url: queryURL,
  method: "GET"
})

// Once the API response is received, perform the following actions
.then(function(response) {
// Get the icon code for the current weather
var iconCode = response.weather[0].icon;
var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";

// Update the HTML on the page with the city name, temperature, humidity, and wind speed
  $(".city").html("<h1> " + response.name + " </h1>");
  $(".temp").text("Temperature: " + ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) + " °F");
  $(".humidity").text("Humidity: " + response.main.humidity + " %");
  $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
      
// Update the icon image on the page with the icon URL
  $("#wicon").attr("src", iconurl);
    });

  });
};

// Call the currentWeather function to run the code
currentWeather();

// Declare a function called fiveDayForecast
function fiveDayForecast(){

// Build the query URL for the OpenWeatherMap API with a hardcoded location and the API key
var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=San+Diego&appid=" + apiKey;

// Use jQuery's AJAX method to make an API request to the OpenWeatherMap API with the built URL
  $.ajax({
    url: fiveDayURL,
    method: "GET"
  })
  // Once the API response is received, perform the following actions
  .then(function(responseTwo) {

// Get the icon code for the weather for the first day of the five-day forecast
  var icon1 = responseTwo.list[4].weather[0].icon;
// Build the URL for the icon using the icon code for the first day to fifth day
  var icon1url = "http://openweathermap.org/img/w/" + icon1 + ".png";
  
  
  var icon2 = responseTwo.list[4].weather[0].icon;
  var icon2url = "http://openweathermap.org/img/w/" + icon2 + ".png";

  var icon3 = responseTwo.list[4].weather[0].icon;
  var icon3url = "http://openweathermap.org/img/w/" + icon3 + ".png";

  var icon4 = responseTwo.list[4].weather[0].icon;
  var icon4url = "http://openweathermap.org/img/w/" + icon4 + ".png";

  var icon5 = responseTwo.list[4].weather[0].icon;
  var icon5url = "http://openweathermap.org/img/w/" + icon5 + ".png";

// This code is creating five variables, tempOne through tempFive, and five variables, day1 through day5. 
  var tempOneF = (responseTwo.list[4].main.temp - 273.15) * 1.8 + 32; // calculates the temperature in Fahrenheit for the first day
  var tempOne = tempOneF.toFixed(1); // rounds the temperature to one decimal place and assigns it to tempOne
  var tempTwoF = (responseTwo.list[12].main.temp - 273.15) * 1.8 + 32;
  var tempTwo = tempTwoF.toFixed(1);
  var tempThreeF = (responseTwo.list[20].main.temp - 273.15) * 1.8 + 32;
  var tempThree = tempThreeF.toFixed(1);
  var tempFourF = (responseTwo.list[28].main.temp - 273.15) * 1.8 + 32;
  var tempFour = tempFourF.toFixed(1);
  var tempFiveF = (responseTwo.list[36].main.temp - 273.15) * 1.8 + 32;
  var tempFive = tempFiveF.toFixed(1);

  var day1 = responseTwo.list[4].dt_txt;  // assigns the date and time for the first day to day1
  var day2 = responseTwo.list[12].dt_txt;
  var day3 = responseTwo.list[20].dt_txt;
  var day4 = responseTwo.list[28].dt_txt;
  var day5 = responseTwo.list[36].dt_txt;


// Code append HTML content to specific elements with IDs, displaying the forecast for each day.

  $("#day-1").html("<h5>" + day1.substr(0, 10) + "</h5>");
  $("#day-1").append("<img src=" + icon1url + ">");
  $("#day-1").append("<p>" + "Temp: " + tempOne + " °F </p>");
  $("#day-1").append("<p>" + "Humidity: " + responseTwo.list[4].main.humidity + " % </p>");

  $("#day-2").html("<h5>" + day2.substr(0, 10) + "</h5>");
  $("#day-2").append("<img src=" + icon2url + ">");
  $("#day-2").append("<p>" + "Temp: " + tempTwo + " °F </p>");
  $("#day-2").append("<p>" + "Humidity: " + responseTwo.list[12].main.humidity + " % </p>");

  $("#day-3").html("<h5>" + day3.substr(0, 10) + "</h5>");
  $("#day-3").append("<img src=" + icon3url + ">");
  $("#day-3").append("<p>" + "Temp: " + tempThree + " °F </p>");
  $("#day-3").append("<p>" + "Humidity: " + responseTwo.list[20].main.humidity + " % </p>");

  $("#day-4").html("<h5>" + day4.substr(0, 10) + "</h5>");
  $("#day-4").append("<img src=" + icon4url + ">");
  $("#day-4").append("<p>" + "Temp: " + tempFour + " °F </p>");
  $("#day-4").append("<p>" + "Humidity: " + responseTwo.list[28].main.humidity + " % </p>");

  $("#day-5").html("<h5>" + day5.substr(0, 10) + "</h5>");
  $("#day-5").append("<img src=" + icon5url + ">");
  $("#day-5").append("<p>" + "Temp: " + tempFive + " °F </p>");
  $("#day-5").append("<p>" + "Humidity: " + responseTwo.list[36].main.humidity + " % </p>");
});
}

fiveDayForecast();

/* This code is attaching an event listener to a button element, which,  when clicked, prevents the default 
behavior of the form submission, gets the value of an input element with the ID "get-weather",  adds it to an array called "cities", and renders it on the page. */

$("button").on("click", function(event) {
  event.preventDefault();

  var apiKey = "628d57f32262d7f6c272be5df6242e8e";
  var getWeather = $("#get-weather");
  var city = getWeather.val().trim();

// Add city to cities array and display on page
  cities.push(city)
  var message = document.querySelector(".invalid-message");
   
  console.log(getWeather);
// Store cities array in local storage
  function storeCities(){
    localStorage.setItem("cities", JSON.stringify(cities));
  }

  if (city === null || city === "" ){
    message.innerHTML = "Invalid input. Please try again!";
  } else {
    message.innerHTML = "";
    renderCities();
    storeCities();
    getCities();
  }
  function renderCities() {  
    $(".search-data").prepend("<p>" + city  + "</p");
  }

  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=latitude&lon=longitude&q=" +
    city + "&appid=" + apiKey;

// initiates an AJAX call using jQuery to fetch data from the OpenWeatherMap API with the specified URL and HTTP method.

  $.ajax({
    url: queryURL,
    method: "GET"
  })

// Executes after the AJAX call completes successfully, with the returned data passed as the response parameter.
    .then(function(response) {

      console.log(queryURL);

      console.log(response);
// This extracts the weather icon code from the response data
      var iconCode = response.weather[0].icon;
      var iconurl = "http://openweathermap.org/img/w/" + iconCode + ".png";
      $(".city").html("<h1>" + response.name + "</h1>");
      $(".temp").text(
        "Temperature: " +
          ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) +
          " °F"
      );
      $(".humidity").text("Humidity: " + response.main.humidity + " %");
      $(".wind").text("Wind Speed: " + response.wind.speed + " MPH");
      $("#wicon").attr("src", iconurl);


      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + response.main.temp);
    });

  var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

// An AJAX request is made to the API endpoint using the GET method and the data is returned in the 'responseTwo' parameter.  
  $.ajax({
    url: fiveDayURL,
    method: "GET"
  }).then(function(responseTwo) {

    console.log(fiveDayURL);

    console.log(responseTwo);
    console.log(responseTwo.list[4].dt_txt);
    console.log(responseTwo.list[4].main.temp);

// The weather icon code for the fourth forecast period is stored in 'icon1' and the URL for the corresponding icon image is constructed using 'icon1url'.

    var icon1 = responseTwo.list[4].weather[0].icon;
    var icon1url = "http://openweathermap.org/img/w/" + icon1 + ".png";
  
    var icon2 = responseTwo.list[4].weather[0].icon;
    var icon2url = "http://openweathermap.org/img/w/" + icon2 + ".png";
  
    var icon3 = responseTwo.list[4].weather[0].icon;
    var icon3url = "http://openweathermap.org/img/w/" + icon3 + ".png";
  
    var icon4 = responseTwo.list[4].weather[0].icon;
    var icon4url = "http://openweathermap.org/img/w/" + icon4 + ".png";
  
    var icon5 = responseTwo.list[4].weather[0].icon;
    var icon5url = "http://openweathermap.org/img/w/" + icon5 + ".png";

// Converts the temp to Kelvin with the below formula & then sets it to 2 decimal points
    var tempOneF = (responseTwo.list[4].main.temp - 273.15) * 1.8 + 32;
    var tempOne = tempOneF.toFixed(1);
    var tempTwoF = (responseTwo.list[12].main.temp - 273.15) * 1.8 + 32;
    var tempTwo = tempTwoF.toFixed(1);
    var tempThreeF = (responseTwo.list[20].main.temp - 273.15) * 1.8 + 32;
    var tempThree = tempThreeF.toFixed(1);
    var tempFourF = (responseTwo.list[28].main.temp - 273.15) * 1.8 + 32;
    var tempFour = tempFourF.toFixed(1);
    var tempFiveF = (responseTwo.list[36].main.temp - 273.15) * 1.8 + 32;
    var tempFive = tempFiveF.toFixed(1);

    var day1 = responseTwo.list[4].dt_txt;
    var day2 = responseTwo.list[12].dt_txt;
    var day3 = responseTwo.list[20].dt_txt;
    var day4 = responseTwo.list[28].dt_txt;
    var day5 = responseTwo.list[36].dt_txt;


    $("#day-1").html("<h5>" + day1.substr(0, 10) + "</h5>");
    $("#day-1").append("<img src=" + icon1url + ">");
    $("#day-1").append("<p>" + "Temp: " + tempOne + " °F </p>");
    $("#day-1").append("<p>" + "Humidity: " + responseTwo.list[4].main.humidity + " % </p>");
  
    $("#day-2").html("<h5>" + day2.substr(0, 10) + "</h5>");
    $("#day-2").append("<img src=" + icon2url + ">");
    $("#day-2").append("<p>" + "Temp: " + tempTwo + " °F </p>");
    $("#day-2").append("<p>" + "Humidity: " + responseTwo.list[12].main.humidity + " % </p>");
  
    $("#day-3").html("<h5>" + day3.substr(0, 10) + "</h5>");
    $("#day-3").append("<img src=" + icon3url + ">");
    $("#day-3").append("<p>" + "Temp: " + tempThree + " °F </p>");
    $("#day-3").append("<p>" + "Humidity: " + responseTwo.list[20].main.humidity + " % </p>");
  
    $("#day-4").html("<h5>" + day4.substr(0, 10) + "</h5>");
    $("#day-4").append("<img src=" + icon4url + ">");
    $("#day-4").append("<p>" + "Temp: " + tempFour + " °F </p>");
    $("#day-4").append("<p>" + "Humidity: " + responseTwo.list[28].main.humidity + " % </p>");
  
    $("#day-5").html("<h5>" + day5.substr(0, 10) + "</h5>");
    $("#day-5").append("<img src=" + icon5url + ">");
    $("#day-5").append("<p>" + "Temp: " + tempFive + " °F </p>");
    $("#day-5").append("<p>" + "Humidity: " + responseTwo.list[36].main.humidity + " % </p>");
  });
  
});

var cities = [];

function getCities(){
  var getCity = localStorage.getItem("cities");
  console.log(getCity);
}