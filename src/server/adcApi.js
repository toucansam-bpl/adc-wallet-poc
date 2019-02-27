import express from 'express'
import AdcClient from 'node-adc'

import creds from '../../credentials.json'

const app = express()
const adc = new AdcClient(creds.user, creds.password)


app.get('/createNewAddress', async (req, res, next) => {
  try {
    const address = await adc.getNewAddress()
    console.log(address)
    res.json({ address })
  } catch (ex) {
    next(ex)
  }
})

app.get('/getBalance', async (req, res, next) => {
  try {
    console.log(`Attempting to get balance for ${req.query.address}`)
    const balance = await adc.getBalance(req.query.address)
    console.log(balance)
    res.json({ balance })
  } catch (ex) {
    next(ex)
  }
})

app.get('/getInfo', async (req, res, next) => {
  try {
    const info = await adc.getInfo()
    res.json(info)
  } catch (ex) {
    next(ex)
  }
})

app.post('/sendAdc', async (req, res, next) => {
  try {
    console.log('Sending adc', req.body)
    const txId = await adc.sendAdc(req.body)
    res.json({ txId })
  } catch (ex) {
    next(ex)
  }
})

export default app
