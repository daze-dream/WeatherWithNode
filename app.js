// A Weather App
const fs = require('fs')
const request = require('postman-request')
//----------
 const weatherUrl = 'http://api.weatherstack.com/current?access_key=550c10e5b9ec12196928a39bfe7f1f97&query=37.8267,-122.4233&units=f'
 const badWeatherUrl = 'http://api.weatherstack.com/current?access_key=550c10e5b9ec12196928a39bfe7f1f97&units=f'
 const geoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnVnYWJvbzEyMzEyNDUiLCJhIjoiY2t0dnI3M25xMmNvbDJvcm9tYmVxZWg4ZSJ9.xgvzlVKEl2zqq1hD-eBn-Q&limit=1'
 const badGeoURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/5j2jn1h25s.json?access_token=pk.eyJ1IjoiYnVnYWJvbzEyMzEyNDUiLCJhIjoiY2t0dnI3M25xMmNvbDJvcm9tYmVxZWg4ZSJ9.xgvzlVKEl2zqq1hD-eBn-Q&limit=1'
 const responseJSON = JSON.parse(fs.readFileSync('ex_weather_data.json').toString())

// request({url: weatherUrl, json: true},(error, response) => {
//     //console.log(response.body.current)
//     //fs.writeFileSync('./ex_weather_data.json', JSON.stringify(response.body));
//     if(error)
//         console.log('Unable to connect to weather API. Check your internet connection or your URL.')
//     else if(response.body.success===false) {
//         console.log('Bad response from server: \n Error Code ' + response.body.error.code + ' \n Reason: ' + response.body.error.info)
//     }
//     else
//     {
//         console.log('At ' + response.body.location.name 
//                         +', it is ' 
//                         + response.body.current.weather_descriptions[0] 
//                         + ' and ' + response.body.current.temperature 
//                         + 'F, feels like ' 
//                         + response.body.current.feelslike + 'F.' 
//                         + response.body.success);
//     }
//     //console.log(responseJSON);
// } )

request({url: geoURL, json:true}, (error, response) => {
    if(error)
    {
        console.log('Unable to connect to geo-location API. Check your internet connection or your URL.')
    }
    else if(response.body.features.length === 0)
    {
        console.log('Unable to determine a matching location. Check your query parameters and try again.')
    }
    else
    {
        console.log(response.body.features[0].center)
    }
})

