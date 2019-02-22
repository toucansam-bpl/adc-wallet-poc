import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Grid, Typography, } from '@material-ui/core'


class HomeScreen extends Component {
  render() {
    const { adcInfoStore } = this.props
    
    return (
      <React.Fragment>
        {adcInfoStore.init.match({
          pending: () => <div>Loading, please wait..</div>,
          rejected: (err) => <div>Error: {err.message}</div>,
          resolved: () => (
            <Grid container>
              Home Screen
            </Grid>
          )
        })} 
      </React.Fragment>
    )
  }
}

export default inject('adcInfoStore')(observer(HomeScreen))
