import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Grid, Typography, } from '@material-ui/core'


class HomeScreen extends Component {
  render() {
    return (
      <Grid container>
        Home Screen
      </Grid>
    )
  }
}

export default inject('adcInfoStore')(observer(HomeScreen))
