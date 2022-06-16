const city= 'accra'
const key='40c52ed46cebc758058c63e13640e379'

const weatherAPI =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metrics`

let temperature =  document.getElementById('temp')
let real =  document.getElementById('real')
let weather=  document.getElementById('weather')
let humidity=  document.getElementById('humidity')
let wind=  document.getElementById('wind')
let pressure=  document.getElementById('pressure')
let rain=  document.getElementById('rain')
let date = document.getElementById('date')

let dates = new Date()
date.innerHTML = dates.toDateString()


fetch(weatherAPI)
    .then(response => response.json()) //get and format unstuctured result
    //.then(data => console.log(data))   store result data and console log it.
    .then(data => {
        console.log(data)
        temperature.innerHTML = Math.round(data.main.temp)
        real.innerHTML = Math.round(data.main.feels_like)
        weather.innerHTML = data.weather[0].main

        wind.innerHTML = data.wind.speed
        pressure.innerHTML = data.main.pressure
        humidity.innerHTML = data.main.humidity
        rain.innerHTML = data.rain['1h']
    })

   
