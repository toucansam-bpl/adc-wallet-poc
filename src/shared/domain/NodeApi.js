import fetch from 'node-fetch'
import qs from 'querystring'

const api = '/adc'

async function makeApiRequest(url, params) {
  return new Promise(async (resolve, reject) => {
    try {
      const query = params ? `?${qs.stringify(params)}` : ''
      const requestUrl = `${api}/${url}${query}`

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
    // return new Promise((y,n) => y({}))
    return makeApiRequest('createNewAddress')
  }

  async getInfo() {
    // return new Promise((y,n) => y({}))
    return makeApiRequest('getInfo')
  }

  async getBalance(address) {
    // hopefully remote ADC node finishes syncing, verify that balance is correct based on inputs and outputs
    // send some transactions directly with the rpc api to understand how it's done
  }
}
