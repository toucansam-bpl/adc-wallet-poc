import fetch from 'node-fetch'
import qs from 'querystring'

const api = '/adc'

async function makeApiRequest(url, params) {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(params)
      const query = params ? `?${qs.stringify(params)}` : ''
      const requestUrl = `${api}/${url}${query}`

      console.log(`Requesting ${requestUrl}`)
      const rawResponse = await fetch(requestUrl, {
        method: 'GET',
      })
      console.log(rawResponse.ok, rawResponse.status)

      if (rawResponse.ok) {
        const response = await rawResponse.json()
        resolve(response)
      } else {
        reject(new Error(`Request did not complete successfully.`))
      }
    } catch (err) {
      console.log('ERROR: ', err)
      reject(err)
    }
  })
}

export default class NodeApi {
  async createNewAddress() {
    return new Promise((y,n) => y({ address: 'Aev2bvXGeVEtqaBKXBM8xDPJ5BCLKCZvzB' }))
    // return makeApiRequest('createNewAddress')
  }

  async getInfo() {
    // return new Promise((y,n) => y({}))
    return makeApiRequest('getInfo')
  }

  async getBalance(address) {
    console.log(address)
    return makeApiRequest('getBalance', { address })
  }
}
