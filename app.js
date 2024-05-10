//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=c1abb2171fe5ea5b949feab3c4a6f7f4
let search = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector(".weatherIcon");
searchBtn.addEventListener('click',getCity);
async function getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1abb2171fe5ea5b949feab3c4a6f7f4&units=metrics`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.querySelector("h1").innerHTML = Math.round(data.main.temp)-275 + "°C";
    document.querySelector("h2").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kph";

    if(data.weather[0].main == "Clouds")
        weatherIcon.src = "images/clouds.png"
    else if(data.weather[0].main == "Clear")
        weatherIcon.src = "images/clear.png"
    else if(data.weather[0].main == "Drizzle")
        weatherIcon.src = "images/drizzle.png"
    else if(data.weather[0].main == "Rain")
        weatherIcon.src = "images/rain.png"
    else if(data.weather[0].main == "Haze")
        weatherIcon.src = "images/mist.png"
    else if(data.weather[0].main == "Snow")
        weatherIcon.src = "images/snow.png"
}

function getCity(){
    getWeather(search.value);
}
getWeather("delhi");