import { action,
         computed, 
         decorate,
         observable,
         runInAction,
       } from 'mobx'
import { task } from 'mobx-task'


export default class AdcInfoStore {
  address = null
  balance = 0
  isNodeActive = false
  transactionId = null

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

    runInAction(() => {
      this.address = address.address
    })
  }

  get hasAddress() {
    return this.address !== null
  }

  get hasTransaction() {
    return this.transactionId !== null
  }

  async loadAddressData(address) {
    const balance = await this.nodeApi.getBalance(address)
    
    runInAction(() => {
      this.address = address
      this.balance = balance.balance
    })
  }

  async sendAdc(to, amount) {
    const tx = await this.nodeApi.sendAdc({
      amount,
      from: this.address,
      to,
    })
    console.log(tx)

    runInAction(() => {
      this.transactionId = tx.txId
    })
  }
}

decorate(AdcInfoStore, {
  address: observable,
  balance: observable,
  createWallet: task,
  hasAddress: computed,
  hasTransaction: computed,
  init: task,
  loadAddressData: task,
  sendAdc: task,
  transactionId: observable,
})
