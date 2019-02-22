import React from 'react'
import { Provider as MobxProvider } from 'mobx-react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

import App from '../shared/App'
import AdcInfoStore from '../shared/stores/AdcInfoStore'
import NodeApi from '../shared/domain/NodeApi'


class Main extends React.Component {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    return <App />
  }
}

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: 'light',
  },
})


const nodeApi = new NodeApi()
const adcInfoStore = new AdcInfoStore(nodeApi)

const stores = {
  adcInfoStore,
}

adcInfoStore.init()


hydrate(
  <MuiThemeProvider theme={theme}>
    <MobxProvider {... stores}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </MobxProvider>
  </MuiThemeProvider>,
  document.querySelector('#root'),
)
