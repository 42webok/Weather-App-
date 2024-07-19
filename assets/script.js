let apiKey = "15cf88f84cd2ef4feea142d4146d890a"; // Replace with your actual API key
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let ico = document.querySelector(".weather-icon");
let w = document.querySelector(".weather");
async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if(response.status == 404){
            alert("Enter Valid City Name");
            w.style.display  = "none";
         }
    
    const data = await response.json();
    console.log("Current weather in Multan:", data);
  
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
   if(data.weather[0].main == "Clouds"){
    ico.src = "assets/img/clouds.png";
   }
   else if(data.weather[0].main == "Clear"){
    ico.src = "assets/img/clear.png";
   }
   else if(data.weather[0].main == "Rain"){
    ico.src = "assets/img/rain.png";
   }
   else if(data.weather[0].main == "Drizzle"){
    ico.src = "assets/img/drizzle.png";
   }
   else if(data.weather[0].main == "Mist"){
    ico.src = "assets/img/mist.png";
   }
   else if(data.weather[0].main == "Snow"){
    ico.src = "assets/img/snow.png";
   }
   w.style.display  = "block";
   
   

  } catch (error) {
    console.error("Error fetching weather:", error);
  }
}
let btn = document.querySelector("button");
btn.addEventListener("click", function() {
  let search = document.querySelector("input").value;
  checkWeather(search);
})

