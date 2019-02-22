import React, { Component } from 'react'
import {
  AppBar,
  CssBaseline,
  Hidden,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import { Link, Route, Switch } from 'react-router-dom'

import logo from '../../public/img/adc-logo.png'
import HomeScreen from './HomeScreen/HomeScreen'
import WalletScreen from './WalletScreen/WalletScreen'


const styles = theme => ({
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100% - 123px)"
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  headerLink: {
    color: '#fff',
    textDecoration: 'none',
  }
});


class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="fixed">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              <img
                src={logo}
                alt="ADC logo"
                style={{ height: '1.16667em', verticalAlign: 'bottom' }}
              />
              <span style={{ marginLeft: '15px' }}>
                <Link to="/" className={classes.headerLink}>AudioCoin Online Wallet</Link>
              </span>
            </Typography>

            <Hidden smDown>
              <Typography color="inherit" />
            </Hidden>
          </Toolbar>
        </AppBar>

        <div className={classes.content}>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/:address" component={WalletScreen} />
          </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(App)
