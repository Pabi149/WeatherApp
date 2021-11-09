const wIcon = document.querySelector("img");
//weather API//
var apiKey = "f08f79406ab1591b48a0bcb99549a25f";
let weather = {    
    getWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=imperial&appid=" + apiKey
      ).then(function (response) {
          console.log(response);
          if (response.ok) {
            return response.json();``
          }
          else{
            alert("The City Name You Have Entered Maybe Incorrect. Please Try Again.");
          }
        })
        .then(function(response){
            weather.displayWeather(response);
        })
    },
    
    displayWeather: function (data) {
        const { name } = data;
        const { id, description } = data.weather[0];
        const { temp } = data.main;
        document.querySelector(".city").innerText = "Weather Forecast for " + name;
        if(id == 800){
          wIcon.src = "WeatherIcons/clear.svg";
          document.body.style.backgroundImage = "url('rain.jpg')";
        }else if(id >= 200 && id <= 232){
          wIcon.src = "WeatherIcons/rain.svg";  
          document.body.style.backgroundImage = "url('rain.jpg')";
        }else if(id >= 600 && id <= 622){
          wIcon.src = "WeatherIcons/snow.svg";
          document.body.style.backgroundImage = "url('rain.jpg')";
        }else if(id >= 701 && id <= 781){
          wIcon.src = "WeatherIcons/haze.svg";
          document.body.style.backgroundImage = "url('rain.jpg')";
        }else if(id >= 801 && id <= 804){
          wIcon.src = "WeatherIcons/cloud.svg";
          document.body.style.backgroundImage = "url('cloudy.jpg')";
        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
          wIcon.src = "WeatherIcons/rain.svg";
          document.body.style.backgroundImage = "url('rain.jpg')";
        }
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
  
      },
      //search bar function//
      searchWeather: function () {
        this.getWeather(document.querySelector(".search-bar").value);
      },
      
    };
//document.querySelector(".search button").addEventListener("click", function () {
  //   weather.search();
  // });

  document.querySelector(".search button").addEventListener("click", function () {
    weather.searchWeather();
  });

  
  document.querySelector(".search-bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.searchWeather();
      }
    });

    weather.getWeather("tulsa");
 