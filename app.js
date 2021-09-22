// A Weather App
const fs = require('fs')
const geoUtil = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
//----------
if(process.argv.length < 3)
    {return console.log('Please provide a location name to the program: \"[location]\" including quotes')}

input = process.argv[2]
console.log(input)

geoUtil.geocode(input, (error, geoData) => {
    if(error)
    {
        return console.log(error);
    }
    // console.log('Error: ' + error);
    // console.log('Data: ',  data);
    forecast.forecast(geoData.latitude,geoData.longitude, 'f',  (error, forecastData) => {
            if(error)
            {
                return console.log(error);
            }
            //console.log('Error: ', error)
            //console.log('Data: ', forecastData)
            const finalForecast = 'In ' 
                    + geoData.location 
                    + ', it is ' 
                    + forecastData.weatherDesc 
                    + ', with a temperature of '
                    + forecastData.temperature
                    + forecastData.unit
                    + ' (feels like '
                    + forecastData.feelsLike
                    +'). '
            console.log(finalForecast)
            }
        )
    }
)



