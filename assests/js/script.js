//let weatherSearch = $('#search-input').val()
let btn = $('#search-button')


btn.on('click', searchCity)

function searchCity(event){
    event.preventDefault()
    let weatherSearch = $('#search-input').val()
console.log(weatherSearch)
}