import bodyParser from 'body-parser'
import express from 'express'

import adc from './adcApi'
import renderer from './middleware/renderer'


const app = express()

app.use(bodyParser.json())

app.get('^/$', renderer)
app.use('/adc', adc)

app.use(express.static('public'))

app.get('*', renderer)

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
