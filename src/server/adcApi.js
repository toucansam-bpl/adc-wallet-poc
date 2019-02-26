import express from 'express'
import AdcClient from 'node-adc'

import creds from '../../credentials.json'

const app = express()
const adc = new AdcClient(creds.user, creds.password)


const apiResponder = (fn) => {
  return async (req, res, next) => {
    try {
      res.json(fn(req))
    } catch (ex) {
      next(ex)
    }
  }
}

app.get('/createNewAddress', apiResponder(async () => {
  const address = await adc.getNewAddress()
  console.log(address)
  return { address }
}))

app.get('/getBalance', apiResponder(async req => {
  console.log(`Attempting to get balance for ${req.query.address}`)
  const balance = await adc.getBalance(req.query.address)
  console.log(balance)
  return { balance }
}))

app.get('/getInfo', apiResponder(async () => await adc.getInfo()))

export default app
