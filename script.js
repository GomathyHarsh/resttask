var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);
var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value)=>rest(value));


function rest(value){
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-body text-primary">
        <div class="card-header">${value[i].name}</div>
        <img src="${value[i].flag}" class="card-img-top" >
        <p class="card-text">Capital:${value[i].capital}</p>
        <p class="card-text">Region:${value[i].region}</p>
        <p class="card-text">Country Code:${value[i].alpha3Code}</p>
        <p class="card-text">Latlng:${value[i].latlng}</p>
        <button type="button" id="city" class="btn btn-secondary" onclick="getWeather()">Click for Weather</button>
       </div>
       </div>
      `;
    
      document.body.append(container);
    }
}
async function getWeather(){
  let cityname=document.getElementById("city").value;
  let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=0f4e4b1942a7d6aafc74f0b23236a746`;
  let report=await fetch(url);
  let res1=await report.json();
  console.log(res1);
  let temp =document.createElement("div");
  temp.setAttribute("id","temp");
  let weather=document.createElement("div");
  weather.setAttribute("id","weather");
  let humidity=document.createElement("div");
  humidity.setAttribute("id","humidity");
  container.append(temp,weather,humidity);
  document.body.append(container);
  temp.innerHTML=`Temperature:${report.main.temp}`;
  weather.innerHTML=`Weather-id:${report.weather[0].id}`;
  humidity.innerHTML=`${report.main.humidity}`;

}




























// async function getWeatherReport(){
//   var cityName = document.getElementById('name').value 
//   let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=0f4e4b1942a7d6aafc74f0b23236a746`)
//   let report = await data.json();
// var weatherResult = document.getElementById('weatherResult')
// weatherResult.innerHTML=`<div class="row g-0">
// <div class="col-md-8">
// <div class="card-body">
//   <h2 class="card-title">Weather Data ${cityName} </h2>
//   <p class="card-text"><small class="text-muted">Temperature:${report.main.temp}</small></p>
//   <p class="card-text"><small class="text-muted">Weatherid:${report.weather[0].id}</small></p>
//   <p class="card-text"><small class="text-muted">Humidity:${report.main.humidity}</small></p>
// </div>
// </div>
// </div>`
// }

