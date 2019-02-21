import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Grid, Typography, } from '@material-ui/core'


class WalletScreen extends Component {
  render() {
    return (
      <Grid container>
        Wallet Screen
      </Grid>
    )
  }
}

export default inject('adcInfoStore')(observer(WalletScreen))
