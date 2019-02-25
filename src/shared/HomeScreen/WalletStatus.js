import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Grid, Typography, withStyles, } from '@material-ui/core'

import CreateWallet from './CreateWallet'

const styles = theme => ({
  container: {
    height: '100%',
  },
})

const WalletLoading = () =>
  <Grid item>
    <Typography color="secondary" variant="headline">
      Connecting to AudioCoin...
    </Typography>
  </Grid>

const WalletUnavailable = () =>
  <Grid item>
    <Typography color="secondary" variant="headline">
      AudioCoin wallet is unavailable. Please try again later.
    </Typography>
  </Grid>


class WalletStatus extends Component {
  render() {
    const { adcInfoStore, classes, } = this.props
    
    return (
      <Grid container
        alignItems="center"
        className={classes.container}
        direction="column"
        justify="center"
      >
        {adcInfoStore.init.match({
          pending: WalletLoading,
          rejected: WalletUnavailable,
          resolved: () => <CreateWallet />,
        })} 
      </Grid>
    )
  }
}

export default withStyles(styles)(inject('adcInfoStore')(observer(WalletStatus)))
