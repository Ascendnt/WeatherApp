const apiKey = "8ff59fce12599d6da174c5fd225ea519";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const unit = "metric";

const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");


async function checkWeather(city){
    const response = await fetch (apiURL + city + `&appid=${apiKey}` + `&units=${unit}`);
    var data = await response.json();
    console.log(data);

    const weatherIcon = data.weather[0].icon;
    
    
    document.getElementById("sky").src = "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
    
})
