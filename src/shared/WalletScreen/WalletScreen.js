import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Card, CardContent, Grid, Typography, TextField, } from '@material-ui/core'
import SendAdc from './SendAdc';


class WalletScreen extends Component {
  componentDidMount() {
    this.props.adcInfoStore.loadAddressData(this.props.match.params.address)
  }

  render() {
    const { adcInfoStore } = this.props

    return (
      <Grid container direction="column" spacing={24}>
        <Grid item xs={12}>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography color="secondary" variant="headline">
                  {`Address: ${adcInfoStore.address}`}
                </Typography>
                <Typography variant="headline">
                  {`Balance: ${adcInfoStore.balance.toFixed(8)}`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            {adcInfoStore.hasTransaction
              ? (
                <Typography variant="h5">
                  Transaction Id: {adcInfoStore.transactionId}
                </Typography>
              ) : (
                <SendAdc />
              )
            }
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default inject('adcInfoStore')(observer(WalletScreen))
