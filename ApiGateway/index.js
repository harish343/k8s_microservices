const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
require('dotenv').config()

// Get the quotes api from the environment(refer docker-compose.yml)
const HTTP = "http://"
const HOST = process.env.QUOTE_SERVICE_SERVICE_HOST
const PORT = process.env.QUOTE_SERVICE_SERVICE_PORT
const QUOTES_API_GATEWAY = HTTP + HOST + ":" + PORT

//joke api

const HOST1 = process.env.JOKE_SERVICE_SERVICE_HOST
const PORT1 = process.env.JOKE_SERVICE_SERVICE_PORT
const QUOTES_API_GATEWAY1 = HTTP + HOST1 + ":" + PORT1

// Use CORS to prevent Cross-Origin Requets issue
app.use(cors())

// Get the status of the API
app.get('/api/status', (req, res) => {
    return res.json({status: 'ok'})
})

// Returns a random quote from the quote api
app.get('/api/randomquote',async (req, res) => {
    try {
        const url1 = QUOTES_API_GATEWAY + '/api/quote'
        console.log(url1)
        const quote = await axios.get(url1)
        return res.json({
            time: Date.now(),
            quote: quote.data
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        return res.json({
            message: "Internal server error",
        })
    }
    
})

// Returns a random joke from the jokes api
app.get('/api/randomjoke',async (req, res) => {
    try {
        const url2 = QUOTES_API_GATEWAY1 + '/api/jokes'
        console.log(url2)
        const joke = await axios.get("http://localhost/api/jokes")
        return res.json({
            time: Date.now(),
            joke: joke.data
        })
    } catch (error) {
        console.log(error)
        res.status(500)
        return res.json({
            message: "Internal server error",
        })
    }
    
})

// Handle any unknown route
app.get('*', (req, res) => {
    res.status(404)
    return res.json({
        message: 'Resource not found'
    })
});

// starts the app
app.listen(3000, () => {
    console.log('API Gateway is listening on port 3000!')
})
