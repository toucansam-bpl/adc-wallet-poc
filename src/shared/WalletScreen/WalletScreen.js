import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Grid, Typography, } from '@material-ui/core'


class WalletScreen extends Component {
  render() {
    const { adcInfoStore } = this.props

    return (
      <Grid container>
        <Typography color="secondary">
          {adcInfoStore.address}
        </Typography>
      </Grid>
    )
  }
}

export default inject('adcInfoStore')(observer(WalletScreen))
