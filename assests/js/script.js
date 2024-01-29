
let btn = $('#search-button')


btn.on('click', searchCity)

function searchCity(event){
    event.preventDefault()
    let weatherSearch = $('#search-input').val()
console.log(weatherSearch)
let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${weatherSearch}&appid=7c8d3234ce864a983dd34685b2d8e1da`

fetch(apiUrl)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data)
    let temp =  data.main.temp
    let celisus = Math.floor(temp -  273.15)
    console.log(temp)
    

    let humidity = data.main.humidity
    console.log(humidity)
    let wind = data.wind.speed
    console.log(wind)

  })

}