const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const response = require('./middleware/response.middleware')
const errorHandler = require('./middleware/error.middleware')

const apiRoute = require('./routes/api.route')

const app = express()

// Middlewares

app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(response)

// Routes
app.use('/api', apiRoute)

app.use((req, res) => res.error(404, 'Route not found'))

app.use(errorHandler)

module.exports = app