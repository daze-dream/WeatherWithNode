const request = require('postman-request')
//-----------------------------------------

/** to get the forecast of the coordinates from weatherstack */
const forecast = (latitude, longitude, unit, callback) => {
    const url2 = 'http://api.weatherstack.com/current?access_key=550c10e5b9ec12196928a39bfe7f1f97&query='
    + latitude + ','
    + longitude
    +'&units='
    + unit.toLowerCase()

    request({url: url2, json: true},(error, response) => {
        if(error)
            callback('Unable to connect to weather API. Check your internet connection or your URL.', undefined)
        else if(response.body.success===false) {
            const badResponse = 'Bad response from server: \n Error Code: ' + response.body.error.code + ' \n Reason: ' + response.body.error.info
            callback(badResponse, undefined)
        }
        else
        {
            callback(undefined, {
                unit: response.body.request.unit,
                weatherDesc: response.body.current.weather_descriptions[0],
                locationName: response.body.location.name,
                temperature: response.body.current.temperature,
                feelsLike: response.body.current.feelslike,
            })

        }
    } )

}


module.exports = {
    forecast:forecast
}