import express from 'express'

import renderer from './middleware/renderer'


const app = express()

app.get('^/$', renderer)

app.use(express.static('public'))

app.get('*', renderer)

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`)
})
