import fetch from 'node-fetch'
import qs from 'querystring'

const api = '/adc'

async function makeApiRequest(url, params, method = 'GET') {
  return new Promise(async (resolve, reject) => {
    try {
      let requestUrl = `${api}/${url}`
      const args = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method,
      }

      if (method === 'GET') {
        requestUrl = `${requestUrl}?${qs.stringify(params)}`
      } else {
        args.body = JSON.stringify(params)
      }

      const rawResponse = await fetch(requestUrl, args)

      if (rawResponse.ok) {
        const response = await rawResponse.json()
        resolve(response)
      } else {
        reject(new Error(`Request did not complete successfully.`))
      }
    } catch (err) {
      reject(err)
    }
  })
}

export default class NodeApi {
  async createNewAddress() {
    // return new Promise((y,n) => y({ address: 'Aev2bvXGeVEtqaBKXBM8xDPJ5BCLKCZvzB' }))
    return makeApiRequest('createNewAddress')
  }

  async getInfo() {
    // return new Promise((y,n) => y({}))
    return makeApiRequest('getInfo')
  }

  async getBalance(address) {
    // return new Promise((y,n) => y({ balance: 2 }))
    return makeApiRequest('getBalance', { address })
  }

  async sendAdc(tx) {
    return makeApiRequest('sendAdc', tx, 'POST')
  }
}
