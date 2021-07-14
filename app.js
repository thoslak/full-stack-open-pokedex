const express = require('express')
const pjson = require('./package.json')

const app = express()

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send(pjson.version)
})

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable */
  console.log('server started on port 5000')
})
