import express from 'express'
import AdcClient from 'node-adc'

import creds from '../../credentials.json'

const app = express()
const adc = new AdcClient(creds.user, creds.password)


const apiResponder = (fn) => {
  return async (req, res, next) => {
    try {
      const response = await fn(req)
      console.log(response)
      res.json(response)
    } catch (ex) {
      console.log(ex)
      next(ex)
    }
  }
}

app.get('/createNewAddress', apiResponder(() => adc.getNewAddress()))
app.get('/getBalance/:address', apiResponder(req => adc.getBalance(req.params.address)))
app.get('/getInfo', apiResponder(() => adc.getInfo()))

export default app
