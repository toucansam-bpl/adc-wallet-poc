import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Button, Grid, Typography, withStyles, } from '@material-ui/core'


export default inject('adcInfoStore')(observer(({ adcInfoStore }) =>
  <React.Fragment>
    <Grid item>
      <Typography color="secondary" variant="headline">
        It looks like you have not yet set up a wallet
      </Typography>
    </Grid>
    <Grid item>
      <Button
        color="secondary"
        onClick={evt => adcInfoStore.createWallet()}
        variant="contained"
      >
        Create ADC Wallet
      </Button>
    </Grid>
  </React.Fragment>
))
