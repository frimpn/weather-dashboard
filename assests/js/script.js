
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
    console.log(data.name)
    let temp =  data.main.temp
    let celisus = Math.floor(temp -  273.15)
    let humidity = data.main.humidity
     let wind = data.wind.speed
  let name = data.name
  let Cityname = $('<h1>').text(`${name} (${dayjs().format('DD/MM/YYYY')})`)
  let cityTemp = $('<p>').text(`Temp: ${celisus}°C `)
  let cityWind = $('<p>').text(`Wind: ${wind} KPH`)
  let cityHumitidy = $('<p>').text(`Humidity: ${humidity}%`)

  $('#today').append(Cityname)
  $('#today').append(cityTemp)
  $('#today').append(cityWind)
  $('#today').append(cityHumitidy)

  


  })




}

