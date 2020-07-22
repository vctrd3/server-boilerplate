const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const keys = require('./config/keys')
const PORT = process.env.PORT || 5000
const app = express()

//const items = require('./routes/api/items')

app.use(bodyParser.json())

const conn = async () => {
  await mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log('connected to db')
  app.listen(PORT, console.log(`server listening on port ${PORT}`))
}

conn()

app.use('/api/items', require('./routes/api/items'))