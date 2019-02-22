import { action,
         computed, 
         decorate,
         observable,
       } from 'mobx'
import { task } from 'mobx-task'


export default class AdcInfoStore {
  isNodeActive = false

  constructor(nodeApi) {
    this.nodeApi = nodeApi
  }

  async init() {
    const info = await this.nodeApi.getInfo()
  }
}

decorate(AdcInfoStore, {
  init: task,
})
