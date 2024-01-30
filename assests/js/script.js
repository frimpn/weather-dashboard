
let btn = $('#search-button')


btn.on('click', searchCity)

function makeBtn(btn){

  



  

  
  let create =  $('<button>')

  create.text(btn)
  create.addClass('btn')
  create.attr('data-city', btn)
  $('#history').append(create)

  


  $('#history').on('click','.btn',function(event){
    let cityName = $(event.target).attr('data-city')
  
    clear()
    searchAgain(cityName)

  })

}




function clear(){
  $('#today').empty()
  $('#forecast').empty()
}


function searchAgain(cityName){

  clear()

  let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7c8d3234ce864a983dd34685b2d8e1da`

fetch(apiUrl)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    clear()
    let temp =  data.main.temp
    let celisus = Math.floor(temp -  273.15)
    let humidity = data.main.humidity
     let wind = data.wind.speed
  let name = data.name
  let lat = data.coord.lat
  let lon = data.coord.lon

  



  let Cityname = $('<h1>').text(`${name} (${dayjs().format('DD/MM/YYYY')})`)
  let cityTemp = $('<p>').text(`Temp: ${celisus}°C `)
  let cityWind = $('<p>').text(`Wind: ${wind} KPH`)
  let cityHumitidy = $('<p>').text(`Humidity: ${humidity}%`)

  $('#today').append(Cityname)
  $('#today').append(cityTemp)
  $('#today').append(cityWind)
  $('#today').append(cityHumitidy)

  

nextDays(lat,lon)
  })


  
}

function searchCity(event){
    event.preventDefault()

    

     $('#today').empty()

  $('#forecast').empty()

    
    let weatherSearch = $('#search-input').val()
    makeBtn(weatherSearch)

let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${weatherSearch}&appid=7c8d3234ce864a983dd34685b2d8e1da`

fetch(apiUrl)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    
    let temp =  data.main.temp
    let celisus = Math.floor(temp -  273.15)
    let humidity = data.main.humidity
     let wind = data.wind.speed
  let name = data.name
  let lat = data.coord.lat
  let lon = data.coord.lon

  



  let Cityname = $('<h1>').text(`${name} (${dayjs().format('DD/MM/YYYY')})`)
  let cityTemp = $('<p>').text(`Temp: ${celisus}°C `)
  let cityWind = $('<p>').text(`Wind: ${wind} KPH`)
  let cityHumitidy = $('<p>').text(`Humidity: ${humidity}%`)

  $('#today').append(Cityname)
  $('#today').append(cityTemp)
  $('#today').append(cityWind)
  $('#today').append(cityHumitidy)

  

nextDays(lat,lon)
  })

  


}


 function nextDays(lat,lon){
  
  let apiUrl= `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7c8d3234ce864a983dd34685b2d8e1da`
  

 fetch(apiUrl)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    $('#forecast').empty()
    
    let days = []
   let differentDays = data.list.filter(forecast =>{
      const forecastDate = new Date(forecast.dt_txt).getDate()
      if(!days.includes(forecastDate))
      return days.push(forecastDate)

    })
    

    for(let i = 1 ; i < differentDays.length; i++){
      
      let panels = $('<div>')

    let date = $('<h3>')
    date.text(differentDays[i].dt_txt)
    
    let temp = $('<p>')
    temp.text(Math.floor(differentDays[i].main.temp - 273.15)+'°C')
    let hum = $('<p>')
    hum.text(differentDays[i].main.humidity+'%')

    panels.append(date)
    panels.append(temp)
    panels.append(hum)


    $('#forecast').append(panels)
  
    }
    
  })

}
