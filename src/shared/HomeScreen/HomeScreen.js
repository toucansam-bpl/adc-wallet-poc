import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'

import Redirect from 'react-router-dom/Redirect';
import WalletStatus from './WalletStatus'


class HomeScreen extends Component {
  render() {
    const { adcInfoStore } = this.props
    
    return adcInfoStore.hasAddress
      ? (<Redirect to={`/${adcInfoStore.address}`} />)
      : (<WalletStatus />)
  }
}

export default inject('adcInfoStore')(observer(HomeScreen))
