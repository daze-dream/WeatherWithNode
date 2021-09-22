// A Weather App
const fs = require('fs')
const geoUtil = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
//----------
if(process.argv.length < 3)
    {return console.log('Please provide a location name to the program: \"[location]\" including quotes')}

input = process.argv[2]
console.log(input)

geoUtil.geocode(input, (error, {latitude, longitude, location} ={}) => {
    if(error)
    {
        return console.log(error);
    }
    // console.log('Error: ' + error);
    // console.log('Data: ',  data);
    forecast.forecast(latitude, longitude, 'f',  (error, {weatherDesc: weather, temperature, unit, feelsLike} = {}) => {
            if(error)
            {
                return console.log(error);
            }
            //console.log('Error: ', error)
            //console.log('Data: ', forecastData)
            const finalForecast = 'In ' 
                    + location
                    + ', it is ' 
                    + weather
                    + ', with a temperature of '
                    + temperature
                    + unit
                    + ' (feels like '
                    + feelsLike
                    +'). '
            console.log(finalForecast)
            }
        )
    }
)



