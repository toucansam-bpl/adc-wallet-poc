import React, { Component } from 'react'
import { inject, observer, } from 'mobx-react'
import { Button, Typography, TextField, Paper, withStyles, } from '@material-ui/core'

const styles = theme => ({
  button: {
    marginBottom: '8px',
    marginTop: '16px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  header: {
    marginLeft: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
})


class SendAdc extends Component {
  state = {
    hasBeenSubmitted: false,
    sendAmount: '',
    sendAmountIsValid: true,
    sendTo: '',
    sendToIsValid: true,
  }

  handleChange = name => event => {
    const val = event.target.value
    this.setState(s => {
      return {
        ... s,
        [name]: val,
      }
    })
    this.validate()
  }

  handleSendAdc = () => {
    const { adcInfoStore } = this.props

    this.validate()
    this.setState(s => {
      return {
        ... s,

        hasBeenSubmitted: true,
      }
    }, () => {
      adcInfoStore.sendAdc(this.state.sendTo, parseFloat(this.state.sendAmount))
    })
  }

  validate() {
    const { adcInfoStore } = this.props

    this.setState(s => {
      const sendAmount = parseFloat(s.sendAmount) 
      return {
        sendAmountIsValid: sendAmount > 0 && sendAmount <= adcInfoStore.balance - 0.01,
        sendToIsValid: s.sendTo.length === 34 && s.sendTo[0] === 'A',
      }
    })
  }

  componentDidMount() {
    this.props.adcInfoStore.loadAddressData()
  }

  render() {
    const { classes, } = this.props

    return (
      <Paper>
        <Typography className={classes.header} variant="headline">
          {`Send ADC`}
        </Typography>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="send-to"
            className={classes.textField}
            error={this.state.hasBeenSubmitted && !this.state.sendToIsValid}
            fullWidth
            label="Send To"
            onChange={this.handleChange('sendTo')}
            margin="normal"
            value={this.state.sendTo}
            variant="filled"
          />
        
          <TextField
            id="send-amount"
            className={classes.textField}
            error={this.state.hasBeenSubmitted && !this.state.sendAmountIsValid}
            label="Amount"
            onChange={this.handleChange('sendAmount')}
            margin="normal"
            type="number"
            value={this.state.sendAmount}
            variant="filled"
          />
        
          <Button
            className={classes.button}
            color="secondary"
            onClick={() => this.handleSendAdc()}
            variant="contained"
          >
            Send ADC
          </Button>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(inject('adcInfoStore')(observer(SendAdc)))
