import { action,
         computed, 
         decorate,
         observable,
       } from 'mobx'
import { task } from 'mobx-task'


export default class AdcInfoStore {
  address = null
  isNodeActive = false

  constructor(nodeApi) {
    this.nodeApi = nodeApi
  }

  async init() {
    const info = await this.nodeApi.getInfo()

    console.log(info)
  }

  async createWallet() {
    const address = await this.nodeApi.createNewAddress()
    console.log(address)

    this.address = address
  }

  get hasAddress() {
    return this.address !== null
  }
}

decorate(AdcInfoStore, {
  address: observable,
  createWallet: task,
  hasAddress: computed,
  init: task,
})
