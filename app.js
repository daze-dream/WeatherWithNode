// A Weather App
const fs = require('fs')
const request = require('postman-request')
//----------
 const url = 'http://api.weatherstack.com/current?access_key=550c10e5b9ec12196928a39bfe7f1f97&query=37.8267,-122.4233&units=f'
 const responseJSON = JSON.parse(fs.readFileSync('ex_weather_data.json').toString())

request({url: url, json: true},(error, response) => {
    //console.log(response.body.current)
    fs.writeFileSync('./ex_weather_data.json', JSON.stringify(response.body));
    console.log('At ' + response.body.location.name 
                      +', it is ' 
                      + response.body.current.weather_descriptions[0] 
                      + ' and ' + response.body.current.temperature 
                      + 'F, feels like ' 
                      + response.body.current.feelslike + 'F.' );
    //console.log(responseJSON);
} )