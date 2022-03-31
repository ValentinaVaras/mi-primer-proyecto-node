const express = require('express')
const morgan = require('morgan')
const path = require('path')
const router = require('./router')

const app = express()
const PORT = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(morgan('dev'))
app.use(router)

app.get('/', (req, res) => {
  res.render('Home')
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
