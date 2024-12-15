const input=document.querySelector("input");
const btn=document.getElementById("btn");
const icon=document.querySelector(".icon");
const weather=document.querySelector(".weather");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");



btn.addEventListener('click',() =>{
    let city=input.value;
    getWeather(city);
})


function getWeather(city)
{
   
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'36af19721d3905b20abc88c14b895176'}`).then(response=>response.json())
    .then(data=> {console.log(data);

    const iconCode=data.weather[0].icon;
    icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather-Icon"/>`
    
     const weathercity=data.name;
     const weatherCountry=data.sys.country;
     weather.innerHTML=`${weathercity}, ${weatherCountry}`; 


        let weathertemp=data.main.temp;
        weathertemp=weathertemp- 273;
        const temp=weathertemp.toFixed(2);
        temperature.innerHTML=`${temp}°C`;

        const weatherdes=data.weather[0].description;
        description.innerHTML=`${weatherdes}`;
})

}


const apikey="36af19721d3905b20abc88c14b895176"



