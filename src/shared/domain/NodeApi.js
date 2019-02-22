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
  async getInfo() {
    return makeApiRequest('getInfo')
  }
}