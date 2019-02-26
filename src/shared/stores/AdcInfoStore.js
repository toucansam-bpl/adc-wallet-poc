import { action,
         computed, 
         decorate,
         observable,
       } from 'mobx'
import { task } from 'mobx-task'


export default class AdcInfoStore {
  address = null
  balance = 0
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

  async loadAddressData() {
    const balance = await this.nodeApi.getBalance(this.address)
    
    this.balance = balance
  }
}

decorate(AdcInfoStore, {
  address: observable,
  createWallet: task,
  hasAddress: computed,
  init: task,
  loadAddressData: task,
})
