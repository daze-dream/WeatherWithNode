// using built-in Node tools to creat HTTP requests
const http = require('http')
const { Http2ServerRequest } = require('http2')

const url = 'http://api.weatherstack.com/current?access_key=550c10e5b9ec12196928a39bfe7f1f97&query=37.8267,-122.4233&units=f'

const request = http.request(url, (response) => {
    let data = '';
    response.on('data', (chunk) =>{
        data = data + chunk.toString();
        console.log(chunk)
    })

    response.on('end', () => {
        console.log(data);
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('Error' + error)
})
request.end()