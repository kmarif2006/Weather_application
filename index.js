const apiKey='400bd439e746aa1aa796b7605ab95a27';
const apiUrl=` https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
const cityName=document.querySelector(".search>input");
const searchButton=document.querySelector(".search button");
const weatherIcon= document.querySelector('.weather-icon');
async function checkWeather(city){
  const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
  if(!response.ok){
    document.querySelector('.error').style.display="block";
    document.querySelector('.weather').style.display="none";
  }else{
    document.querySelector('.error').style.display="none";
    let data= await response.json();
  // console.log(data);
  document.querySelector('.city').innerHTML=data.name;
  document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'&deg;C';
  document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
  document.querySelector('.wind').innerHTML=data.wind.speed+'km/hr';
  if(data.weather[0].main==='Clouds'){
    weatherIcon.src='./images/cloudy.png';
  }else if(data.weather[0].main==='Clear'){
    weatherIcon.src='./images/clear-sky.png';
  }else if(data.weather[0].main==='Rain'){
    weatherIcon.src='./images/rain.png';
  }
  else if(data.weather[0].main==='Drizzle'){
    weatherIcon.src='./images/drizzle.png';
  }else if(data.weather[0].main==='Mist'){
    weatherIcon.src='./images/mist.png';
  }
  document.querySelector('.weather').style.display="block";
  }
  
}

searchButton.addEventListener("click",()=>{
  checkWeather(cityName.value);
})
