import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Card, CardContent, Grid, Typography, TextField, } from '@material-ui/core'


class WalletScreen extends Component {
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
                  {`Balance: 0.00000000`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <CardContent>
                <Typography variant="headline">
                  {`Send ADC`}
                </Typography>
                <TextField />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="headline">
            {`Transactions`}
          </Typography>
          <Card>
            <CardContent>
              Hi
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default inject('adcInfoStore')(observer(WalletScreen))
