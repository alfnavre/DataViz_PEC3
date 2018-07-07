const express = require('express')
const cors = require('cors')
const app = express()

const chartData = require('./demo_data/country')

app.use(cors())

app.get('/data', (req, res) => { res.send(chartData) })
app.get('/*', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
